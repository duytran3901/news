import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { TAGS } from "../../saga/actionTypes";
import { SyncLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

type Props = {
  setSelectedTag: any
}

export default function Tags({ setSelectedTag }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tagList = useSelector((state: RootState) => state.tags.value);

  const fetchTags = useCallback(() => {
    dispatch({ type: TAGS.FETCHTAG });
  }, [dispatch]);

  useEffect(() => {
    fetchTags();
  }, [fetchTags]);

  const handleClick = (tag: any) => {
    setSelectedTag(tag);
    navigate(`/tag/${tag}`);
  };

  return (
    <div className="bg-color-grayflame widget pt-30px pb-30px px-30px">
      <h5 className="widget-title">Tags</h5>
      <ul className="border-list">
        {tagList ? (
          <>
            {tagList?.tags.map((tag, id) => {
              return (
                <li key={id}>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClick(tag)}
                  >
                    {tag}
                  </span>
                </li>
              );
            })}
          </>
        ) : (
          <SyncLoader
            className="d-flex my-4 justify-content-center"
            color="#343a40"
            size={10}
          />
        )}
      </ul>
    </div>
  );
}
