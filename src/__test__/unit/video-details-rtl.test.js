import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import VideoDetails from "../../components/video_details";

const mockVideo = {
  etag: "44364XIxj8d0lMgHFpX9rZbma04",
  id: { kind: "youtube#video", videoId: "Xofo8H4O5N8" },
  kind: "youtube#searchResult",
  snippet: {
    channelId: "UC7A0P8INcRIbhgFQ1v46Uyg",
    channelTitle: "Ali Zafar",
    description:
      'Mujhe Tum Nazar Se - Ali Zafar Ali Zafar performed live ghazal "Mujhe Tum Nazar Sai", a tribute to Legendary Mehdi Hassan at ...',
    liveBroadcastContent: "none",
    publishTime: "2019-07-19T14:58:49Z",
    publishedAt: "2019-07-19T14:58:49Z",
    title:
      "Mujhe Tum Nazar Se - Ali Zafar, Tribute to Mehdi Hassan at LSA 2012",
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/Xofo8H4O5N8/default.jpg",
        width: 120,
        height: 90,
      },
      high: {
        url: "https://i.ytimg.com/vi/Xofo8H4O5N8/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      medium: {
        url: "https://i.ytimg.com/vi/Xofo8H4O5N8/mqdefault.jpg",
        width: 320,
        height: 180,
      },
    },
  },
};

describe("VideoDetails", () => {
  it("Should render progressbar if video prop is null", () => {
    render(<VideoDetails video={null} />);
    const progressBarElement = screen.getByRole("progressbar");

    expect(progressBarElement).toBeInTheDocument();
  });

  it("Should render iframe if video prop is not null", () => {
    render(<VideoDetails video={mockVideo} />);

    const progressBarElement = screen.queryByRole("progressbar");
    expect(progressBarElement).not.toBeInTheDocument();

    const iframeElement = screen.getByTitle(mockVideo.snippet.title);
    expect(iframeElement).toBeInTheDocument();
  });

  it("Should show video description if video prop is not null", () => {
    render(<VideoDetails video={mockVideo} />);

    const videoTitleElement = screen.queryByText(mockVideo.snippet.title);
    expect(videoTitleElement).toBeInTheDocument();

    const videoDescriptionElement = screen.getByRole("heading");
    expect(videoDescriptionElement.textContent).toBe(
      mockVideo.snippet.description
    );
  });
});
