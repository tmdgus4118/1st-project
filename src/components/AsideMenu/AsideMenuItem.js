import React, { useState } from 'react';

const AsideMenuItem = props => {
  const { info } = props;

  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const detailClick = () => {
    //TODO: 클릭된 내용의 key=value를 쿼리 스트링으로 보내야됨(아직 key,value값 확정 안됨)
  };

  return (
    <>
      <div className="borderBottom" onClick={onClick}>
        {info.text}
      </div>
      <div
        className={`menu ${isOpen ? 'openMenu' : 'closeMenu'}`}
        onClick={detailClick}
      >
        {info.detail.map(data => (
          <div key={data.id}>{data.text}</div>
        ))}
      </div>
    </>
  );
};

export default AsideMenuItem;
