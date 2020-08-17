import React from "react";
import PlayIcon from "../img/play-button-black.inline.svg";
import moment from "moment";

class NowPlaying extends React.Component {
  componentDidMount() {}

  // Thursday = 4
  getDay(dayINeed, hour, minutes) {
    // if we haven't yet passed the day of the week that I need:
    if (moment().isoWeekday() <= dayINeed) {
      // then just give me this week's instance of that day
      return moment()
        .isoWeekday(dayINeed)
        .set({ hour: hour, minutes: minutes, seconds: 0, milliseconds: 0 });
    } else {
      // otherwise, give me next week's instance of that day
      return moment()
        .add(1, "weeks")
        .isoWeekday(dayINeed)
        .set({ hour: hour, minutes: minutes, seconds: 0, milliseconds: 0 });
    }
  }

  render() {
    const { times } = this.props;

    if (
      times.some((time) =>
        moment()
          .add(10, "minutes")
          .isBetween(
            this.getDay(
              time.startTime.dayOfWeek,
              time.startTime.hours,
              time.startTime.minutes
            ),
            this.getDay(
              time.endTime.dayOfWeek,
              time.endTime.hours,
              time.endTime.minutes
            )
          )
      )
    ) {
      const time = times.find((time) =>
        moment()
          .add(10, "minutes")
          .isBetween(
            this.getDay(
              time.startTime.dayOfWeek,
              time.startTime.hours,
              time.startTime.minutes
            ),
            this.getDay(
              time.endTime.dayOfWeek,
              time.endTime.hours,
              time.endTime.minutes
            )
          )
      );
      return (
        <a
          className="gh-now-playing"
          href={time.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="gh-now-playing__live">LIVE</div>
          <div className="gh-now-playing-details">
            <div className="gh-now-playing-details__title">
              {time.name}
              {time.subtitle && (
                <div className="gh-now-playing-details__subtitle">
                  {time.subtitle}
                </div>
              )}
            </div>
            <div className="gh-now-playing-details__icon">
              <PlayIcon />
            </div>
          </div>
        </a>
      );
    } else {
      return <div></div>;
    }
  }
}

export default NowPlaying;
