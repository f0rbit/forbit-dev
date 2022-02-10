import CommitTimelineItem from "./CommitTimelineItem";
import RedditTimelineItem from "./RedditTimelineItem";
import TwitterTimelineItem from "./TwitterTimelineItem";
export function getDate(date) {
  var d = new Date(date);
  return <p>{d.toLocaleString()}</p>;
}

function monthDate(month, year) {
  return (
    <>
      <div className="p-5 text-lg text-white" id={(month + year).toLowerCase()}>
        {month + " " + year}
      </div>
    </>
  );
}

function renderTimeline(timeline) {
  const objects = [];
  var month = -1;
  for (var i = 0; i < timeline.length; i++) {
    var date = new Date(timeline[i].date);
    if (month !== date.getMonth()) {
      // new month
      objects.push(
        monthDate(
          date.toLocaleDateString("default", { month: "long" }),
          date.getFullYear()
        )
      );
      month = date.getMonth();
    }
    objects.push(TimelineItem(timeline[i]));
  }
  return objects;
}

function TimelineItem(data) {
  if (data.category === "COMMITS") return <CommitTimelineItem commits={data} />;
  if (data.category === "REDDIT") return <RedditTimelineItem post={data} />;
  if (data.category === "TWITTER") return <TwitterTimelineItem post={data} />;
  return <></>;
}

function Timeline({ timeline }) {
  return (
    <div className="h-full min-w-[70%] max-w-[38rem] p-2">
      <div className="flex flex-col items-center justify-center space-y-4">
        {renderTimeline(timeline)}
      </div>
    </div>
  );
}

export default Timeline;
