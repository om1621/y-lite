import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../../App";

const mockData = [
  {
    etag: "44364XIxj8d0lMgHFpX9rZbma04",
    id: { kind: "youtube#video", videoId: "Xofo8H4O5N8" },
    kind: "youtube#searchResult",
    snippet: {
      description:
        'Mujhe Tum Nazar Se - Ali Zafar Ali Zafar performed live ghazal "Mujhe Tum Nazar Sai", a tribute to Legendary Mehdi Hassan at ...',
      title:
        "Mujhe Tum Nazar Se - Ali Zafar, Tribute to Mehdi Hassan at LSA 2012",
      thumbnails: {
        high: {
          url: "https://i.ytimg.com/vi/Xofo8H4O5N8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
    },
  },
  {
    etag: "8KjVRoxrCf_x9XYbiVD9J11ps9o",
    id: { kind: "youtube#video", videoId: "68nCH3rvG_8" },

    snippet: {
      description:
        "With his debut album set to step into the world, Osho Jain has carefully poured out all his emotions and experiences into 7 songs ...",
      title: "Saar - Osho Jain (Full Album)",
      thumbnails: {
        high: {
          url: "https://i.ytimg.com/vi/68nCH3rvG_8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
    },
  },
];

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: {
        items: mockData,
      },
    }),
  },
}));

describe("Home", () => {
  test("Check flow for fetching videos", async () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText("anuv jain");
    fireEvent.change(inputElement, {
      target: {
        value: "salman elahi",
      },
    });

    const buttonElement = screen.getByRole("button", {
      name: "Search",
    });

    fireEvent.click(buttonElement);

    const videoItemElements = await screen.findAllByTestId(/list-item-/i);
    expect(videoItemElements.length).toBe(2);
  });

  test("Clicking on a video from item list should updated video being displayed", async () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText("anuv jain");
    fireEvent.change(inputElement, {
      target: {
        value: "salman elahi",
      },
    });

    const buttonElement = screen.getByRole("button", {
      name: "Search",
    });

    fireEvent.click(buttonElement);
    const videoItemElements = await screen.findAllByTestId(/list-item-/i);
    const selectedVideoListItem = videoItemElements[1];
    fireEvent.click(selectedVideoListItem);

    const iframeElement = screen.getByTitle(mockData[1].snippet.title);
    expect(iframeElement).toBeInTheDocument();
  });
});
