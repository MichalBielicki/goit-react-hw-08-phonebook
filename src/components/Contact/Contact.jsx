import { Loading } from "notiflix";
import React from "react";
import { useSelector } from "react-redux";
import {
  useDeleteContactByIdMutation,
  useGetContactsQuery,
} from "../../services/api";
import { loadFromSessionStorage } from "../../services/sessionStorage";
import Loader from "../Loader/Loader";

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();

  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.phone.includes(filter)
  );
};
export const Contact = () => {
  const currentUserId =
    useSelector((state) => state.loggedUser.id) ||
    loadFromSessionStorage("USER")[0];

  const { data, error, isLoading } = useGetContactsQuery(currentUserId);
  const [deleteContact] = useDeleteContactByIdMutation();

  const filter = useSelector((state) => state.filter);
  const onDelete = (id) => {
    deleteContact([currentUserId, id]);
    Loading.hourglass("Deleting contact...");
  };

  Loading.remove(1000);

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Loader />
      ) : data ? (
        <>
          {getVisibleContacts(data, filter).map(({ id, name, phone }) => (
            <li key={id}>
              {name} : {phone}
              <button type="button" onClick={() => onDelete(id)}>
                Delete
              </button>
            </li>
          ))}
        </>
      ) : null}
    </>
  );
};
