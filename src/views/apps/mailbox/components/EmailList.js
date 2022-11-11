import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setViewingMail, toggleSelectMail } from '../mailboxSlice';
import EmailListItem from './EmailListItem';

const EmailList = ({ items }) => {
  const dispatch = useDispatch();
  const { selectedItems } = useSelector((state) => state.mailbox);
  const toggleItem = (clickedMail) => {
    dispatch(toggleSelectMail(clickedMail));
  };
  const openMail = (mail) => {
    dispatch(setViewingMail(mail));
  };

  return (
    <div id="emailListContainer">
      {items &&
        items.map((mail, mIndex) => {
          return (
            <EmailListItem
              key={`mail.${mIndex}`}
              mail={mail}
              selected={selectedItems.find((x) => x.id === mail.id)}
              toggleItem={toggleItem}
              openMail={openMail}
            />
          );
        })}
    </div>
  );
};
export default EmailList;
