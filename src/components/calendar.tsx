import { component$, useClientEffect$ } from "@builder.io/qwik";

type Day = {
  date: string;
  count: number;
  level: number;
};

export function groupDataByWeek(data: Day[]): Day[][] {
  const weeks = [];
  let week = [];
  for (let i = 0; i < data.length; i++) {
    week.push(data[i]);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  return weeks;
}

export function generateColor(level: number, max: number = 5) {
  // take into account opacity, if level is 0, then opacity is 0, if level is max, then opacity is 1
  // generate green colors
  const opacity = level / max;
  const red = 0;
  const green = 255;
  const blue = 0;
  if (level === 0) {
    return `rgba(200, 200, 200, 0.05)`;
  }
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}

export default component$(
  ({
    width = 520,
    height = 100,
    data,
  }: {
    width?: number;
    height?: number;
    data: any;
  }) => {
    //make sure svg is responsive, so it scales with the container
    // also make sure it completely fits the container
    const formattedData = groupDataByWeek(data);

    // spacing between each square and make rounded squares
    const spacing = 2;
    const rounded = 2;
    const squareSize = 10;

    const MONTHS = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
      <svg
        width={width + 20}
        height={height}
        viewBox={`0 0 ${width + 20} ${height}`}
      >
        <g transform={`translate(0, 9)`}>
          {DAYS.map((day, i) => (
            <text x={0} y={i * squareSize} font-size="8" fill="#999">
              {day}
            </text>
          ))}
        </g>
        <g transform={`translate(35, ${height - 15})`}>
          {MONTHS.map((month, i) => (
            <text
              x={i * 44}
              y={0}
              text-anchor="middle"
              font-size="10"
              fill="#999"
            >
              {month}
            </text>
          ))}
        </g>
        {formattedData.map((week, i) => (
          <g transform={`translate(${20 + i * squareSize + spacing}, 0)`}>
            {week.map((day, j) => (
              <rect
                x={0}
                y={j * squareSize + spacing}
                width={squareSize - spacing}
                height={squareSize - spacing}
                fill={generateColor(day.level)}
                style={`rx: ${rounded}; ry: ${rounded}`}
              >
                <title>{`${day.count} contributions at ${new Date(
                  day.date
                ).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}`}</title>
              </rect>
            ))}
          </g>
        ))}
      </svg>
    );
  }
);
