export type FetchBooksArgs = {
  searchValue: string;
  categoryId: string;
  sort: string;
  currentPage: number;
};

export type FetchCurrentBookArg = {
  id: string | undefined;
};

export type BookItem = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string;
    description?: string;
    categories: string[];
    imageLinks: {
      smallThumbnail: string;
    };
  };
};

type TStatus = "loading" | "success" | "error";

export type BookSliceState = {
  books: BookItem[];
  singleBook: BookItem | null;
  status: TStatus;
  searchValue: string;
  searchClick: string;
  totalBooks: number;
};

export type BookItemProps = {
   thumbnail: string;
   title: string;
   authors: string;
   categories: string[];
 };