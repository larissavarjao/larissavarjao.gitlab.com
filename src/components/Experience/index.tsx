import * as React from 'react';

const s = require('./style.scss');

interface IProps {}

const companys = [
  {
    name: 'Cubos',
    text:
      'Responsible for developing web applications using React.JS, TypeScript and Webpack. We use Scrum for managing product development and Gitlab for manage the CI process. I have being part of Cubos since november 2017.',
    url: './logo_cubos.svg'
  },
  {
    name: 'Brisa',
    text:
      "I worked on software testing with the company's main customer, LG, from March 2017 to November 2017.",
    url: './logo_brisa.png'
  },
  {
    name: 'PwC',
    text:
      'During the period from July 2015 to March 2017 I worked as an assistant in the auditing part of PwC, one of the big four companies.',
    url: './logo_pwc.svg'
  }
];

export default class Experience extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.experience}>
        <h1 className={s.title}>Work Experience</h1>
        <div className={s.info}>
          <div className={s.companies}>
            {companys.map(comp => {
              return (
                <div className={s.item}>
                  <img src={require(`${comp.url}`)} />
                  <div className={s.info}>
                    <h1>{comp.name}</h1>
                    <p>{comp.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}