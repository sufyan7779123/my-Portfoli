import React from 'react';
import './Experience.css';
import  history from "../data/history.js";
import skills from "../data/skills.js";
import { getImageUrl } from '../utils';

export default function Experience() {
  return (
    <section className='container-ex' id='experience'>
      <h2 className='title-ex'>Experience</h2>
      <div className='content-ex'>
        <div className='skills-ex'>
          {skills.map((skill, id)=>{
            return(
              <div key={id} className='skill-ex'>
                <div className='skillImage-con'>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            )
          })}
        </div>

        <ul className="history-ex">
          {history.map((historyItem, id) => {
            return (
              <li key={id} className='historyItem'>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className='historyItemDetails'>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  )
}
