export type FetchBooksArgs = {
  search: string;
  categoryId: string;
  sortPick: string;
  pagination: string;
};

export type BookItem = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string;
    categories: string;
    imageLinks: {
      smallThumbnail: string;
    };
  };
};

type TStatus = "loading" | "success" | "error";

export type BookSliceState = {
  books: BookItem[];
  status: TStatus;
  searchValue: string;
  searchClick: string;
  totalBooks: number;
};
