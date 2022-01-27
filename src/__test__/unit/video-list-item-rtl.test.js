import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ResultListItem from "../../components/result_list_item";

const mockFunction = jest.fn();

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

describe("ResultListItem", () => {
  it("Should render thumbnail image with given source", () => {
    render(
      <ResultListItem video={mockVideo} onClickItem={mockFunction} index={0} />
    );

    const imageElement = screen.getByAltText("ThumbnailImage");

    expect(imageElement).toHaveAttribute(
      "src",
      mockVideo.snippet.thumbnails.high.url
    );
    expect(getComputedStyle(imageElement).width).toBe("150px");
    expect(getComputedStyle(imageElement).height).toBe("100px");
  });

  it("Should display video title", () => {
    render(<ResultListItem video={mockVideo} onClickItem={mockFunction} />);

    const titleElement = screen.getByText(mockVideo.snippet.title);

    expect(titleElement).toBeInTheDocument();
  });
});
