import React, { useEffect, useState } from "react";
import Styles from "./Leaderboard.module.css";
import RefferalData from "../../JSON/Refferal.json";
import listArrowRight from "../../assests/list-arrow.svg";
import listArrow from "../../assests/list-arrow-right.svg";

type Props = {};
type Ref = {
  rank: number;
  name: string;
  score: number;
};
const Leaderboard = (props: Props) => {
  const [RefferalList, setRefferalList] = useState<Ref[]>([]);
  const [pageNo, setpageNo] = useState(0);
  const totalPages = Math.floor(RefferalData.data.length / 20) + 1;

  const updateRefList = (index: any) => {
    const startIndex = index * 20;
    const endIndex = startIndex + 20;
    const newArr = RefferalData.data.slice(startIndex, endIndex);
    setRefferalList(newArr);
  };

  useEffect(() => {
    updateRefList(pageNo);
  }, [pageNo]);

  return (
    <div className={Styles.LeaderboardRoot}>
      <div className={Styles.LeaderBoardTitle}>
        <p className={Styles.titles}>LeaderBoard</p>
      </div>

      <div className={Styles.table}>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Profile</th>
              <th>XP</th>
            </tr>
          </thead>
          <tbody>
            {RefferalList.length != 0 &&
              RefferalList.map((e, index) => {
                return (
                  <tr key={index}>
                    <td>{e.rank}</td>
                    <td>{e.name}</td>
                    <td>{e.score}</td>
                  </tr>
                );
              })}
            <tr>
              <td colSpan={3}>
                <div className={Styles.bookmark}>
                  <img
                    src={listArrow}
                    height={20}
                    width={20}
                    onClick={() => {
                      if (pageNo > 0) {
                        updateRefList(pageNo - 1);
                        setpageNo(pageNo - 1);
                      }
                    }}
                  />
                  <span>
                    {pageNo + 1}/{totalPages}
                  </span>
                  <img
                    src={listArrowRight}
                    height={20}
                    width={20}
                    onClick={() => {
                      if (pageNo < totalPages - 1) {
                        updateRefList(pageNo + 1);
                        setpageNo(pageNo + 1);
                      }
                    }}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
