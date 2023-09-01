import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, API_KEY } from "../redux/book/asyncActions";

type SingleBookItem = {
  id: string;
  volumeInfo: {
    title: string;
    authors: string;
    description: string;
    categories: string[];
    imageLinks: {
      smallThumbnail: string;
    };
  };
};

export const useBook = () => {
  const [book, setBook] = useState<SingleBookItem>();
  const { id } = useParams();

  useEffect(() => {
    async function fetchBook() {
      try {
        const { data } = await axios.get(`${BASE_URL}/${id}?key=${API_KEY}`);
        setBook(data);
      } catch (error) {
        alert("Книга не найдена");
      }
    }
    fetchBook();
  }, []);

  return { book };
};
