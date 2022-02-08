import CommitTimelineItem from "./CommitTimelineItem";
import RedditTimelineItem from "./RedditTimelineItem";
import TwitterTimelineItem from "./TwitterTimelineItem";
export function getDate(date) {
  var d = new Date(date);
  return <p>{d.toLocaleString()}</p>;
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
        {timeline.map((i) => TimelineItem(i))}
      </div>
    </div>
  );
}

export default Timeline;
