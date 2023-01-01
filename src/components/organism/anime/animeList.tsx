import React from "react";
import { Icon, VideoFromYoutube } from "../../atom";
import { animeLists } from "./animeDeskripsi";
const AnimeList = () => {
  /** why make filter mekanisme??, so delete anime that i want not to display to the ui is mendokusai ,so i decide to make fillter mekanisme */
  const animeObjectEntries = Object.entries(animeLists);
  return (
    <ul className="list-group fs-4 text-dark">
      <li className="list-group-item text-center">
        <Icon variant={"primary"} icon={"hearts"} name={""} />
        my anime lists [
        {animeObjectEntries.filter((anime) => anime[1].tampil === true).length}]
      </li>
      {animeObjectEntries
        .filter((anime) => anime[1].tampil === true)
        .map((animelist, i) => (
          <>
            <li
              className="list-group-item border-start-0 border-end-0 border-info border-1"
              key={animelist[1].name}
            >
              <Icon variant={"primary"} icon={"play"} name={""} />
              {animelist[1].name}
            </li>
            <li className="list-group-item" key={animelist[1].pov}>
              <Icon variant={"info"} icon={"list-stars"} name={""} />
              {animelist[1].pov}
            </li>
            <li className="list-group-item" key={animelist[1].rate}>
              <Icon variant={"info"} icon={"stars"} name={""} />
              {animelist[1].rate}
            </li>
            <li className="list-group-item" key={animelist[1].rank}>
              <Icon variant={"info"} icon={"moon-stars-fill"} name={""} />
              {animelist[1].rank}
            </li>
            <li className="list-group-item" key={animelist[1].msg}>
              <Icon
                variant={`info ${animelist[1].msg ?? "d-none"}`}
                icon={"stickies-fill"}
                name={""}
              />
              {animelist[1].msg ?? undefined}
            </li>
            <li className="list-group-item" key={animelist[1].link}>
              <Icon
                variant={`info ${animelist[1].link ?? "d-none"} h2`}
                icon={"link"}
                name={""}
              />
              <a
                href={animelist[1].link ?? undefined}
                target="_blank"
                className={`${animelist[1].link ?? "d-none"}`}
              >
                link referensi
              </a>
            </li>
            <li
              className="list-group-item d-flex flex-column mb-4 shadow"
              key={animelist[1].trailer}
            >
              <div className="d-flex gap-2 justify-content-center">
                <Icon variant={"info"} icon={"film"} name={" "} />
                <p className="fs-5">trailer</p>
              </div>
              <div className="d-flex justify-content-center">
                <div className="col-md-8 col-12">
                  <VideoFromYoutube src={animelist[1].trailer} />
                </div>
              </div>
            </li>
          </>
        ))}
    </ul>
  );
};

export default AnimeList;
