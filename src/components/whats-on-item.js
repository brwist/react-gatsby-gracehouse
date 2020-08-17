import React from "react";
import moment from "moment";

// Assumes when there is multiple times for a single item,
// that the times are always same (dates differ only)
class WhatsOnItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      times: [],
    };
  }
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
  componentDidMount() {
    const times = this.props.times
      ? this.props.times.reduce((accumulator, currentValue) => {
          accumulator.push({
            startTime: this.getDay(
              currentValue.startTime.dayOfWeek,
              currentValue.startTime.hours,
              currentValue.startTime.minutes
            ),
            endTime: this.getDay(
              currentValue.endTime.dayOfWeek,
              currentValue.endTime.hours,
              currentValue.endTime.minutes
            ),
          });
          return accumulator;
        }, [])
      : null;
    this.setState({
      times: times,
    });
  }

  render() {
    const {
      title,
      url,
      compact,
      rtl,
      subtitle,
      extraText,
      extraTitle,
      isYouTube,
    } = this.props;
    const reducer = (accumulator, currentValue) => {
      accumulator.push(currentValue.startTime.format("ddd"));
      return accumulator;
    };
    const days = this.state.times ? this.state.times.reduce(reducer, []) : null;
    return (
      <div
        className={`whats-on-item ${compact ? "whats-on-item--compact" : ""} ${
          rtl ? "whats-on-item--rtl" : ""
        }`}
      >
        <h2>{title}</h2>
        {extraText ? (
          <p className="m-b-sm">
            <div className="text-bold">{extraTitle}</div>
            {extraText}
          </p>
        ) : null}
        {this.state.times && this.state.times.length > 0 && (
          <>
            <p>
              {url ? (
                <div className="text-bold">
                  {isYouTube ? "YouTube Live" : "Zoom"}
                </div>
              ) : null}
              {days.join(", ")} {this.state.times[0].startTime.format("h:mma")}{" "}
              - {this.state.times[0].endTime.format("h:mma")}
            </p>
            {subtitle && <p>{subtitle}</p>}
            {this.state.times.some((time) =>
              moment()
                .add(10, "minutes")
                .isBetween(time.startTime, time.endTime)
            ) ? (
              <a
                className={`whats-on-button whats-on-button--live`}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Meeting
              </a>
            ) : (
              <div className={`whats-on-button`}>Starting Later</div>
            )}
          </>
        )}
      </div>
    );
  }
}

export default WhatsOnItem;
