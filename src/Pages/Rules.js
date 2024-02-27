import React, { Fragment } from 'react';
import TopMenu from '../Components/TopMenu';
import InfoDiv from '../MyComponents/InfoDiv';
import { Row, Col } from 'react-bootstrap';

const NumberBullet = ({ number }) => {
  return (
    <div style={bullet_styles.container}>
      <div style={bullet_styles.bullet}>{number}</div>
    </div>
  );
};

const bullet_styles = {
  container: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    background: '#CCCCCC',
    backgroundColor: '#CCCCCC', // blue color
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10px',
    color: '#FF1744', // white color for text
    fontWeight: 'bold',
    fontSize: '16px',
  },
  bullet: {
    zIndex: '1', // Ensures number is above background
  }
};

const RuleItem = ({ number, text }) => {
    return (
      <Row className='mt-2' style={rule_item_styles.rule}>
        <Col xs={1} style={rule_item_styles.numberColumn}>
          <NumberBullet number={number}/>
        </Col>
        <Col>
          <p style={rule_item_styles.paragraph}>{text}</p>
        </Col>
      </Row>
    );
  };
  
  const rule_item_styles = {
    rule: {
      marginBottom: '5px',
    },
    paragraph: {
      fontSize: '14px',
      lineHeight: '1.5',
      textAlign: 'justify',
    },
    numberColumn: {
      flexBasis: '10%',
      maxWidth: '7%',
    },
  };

const Rules = () => {
  return (
    <Fragment>
        <TopMenu/>
        <div className='title mt-3 mb-3' style={styles.container}>
            <InfoDiv info="JU NCPC 2023 General Rules of Contest" gradient="linear-gradient(45deg, #FF5252 30%, #FF1744 90%)"></InfoDiv>
            <RuleItem number="1" text="Solutions to problems submitted for judging are called runs. Each run is judged as accepted or rejected by the judge, and the team is notified of the result. Only source code should be submitted, not the executables or any other files."/>
            <RuleItem number="2" text="A contestant may submit a clarification request to the judges only through bapsoj’s clarification system. If the judges agree that an ambiguity or error exists, a clarification will be issued to all contestants. Judges may decide not to answer a clarification at all in which case that particular clarification request will be marked as IGNORED in the bapsoj clarification page."/>
            <RuleItem number="3" text="If teams believe that there is something wrong with the judge data, they are strongly advised to use the bapsoj clarification system to communicate with the judges rather than meeting them in person after the contest."/>
            <RuleItem number="4" text="Contestants are not to converse with anyone except members of their own team and personnel designated by the organizing committee while seated at the team desk. They may not even talk with their team members when they are walking around the contest floor to have food or any other purposes"/>
            <RuleItem number="5" text="While the contest is scheduled for a particular time length (five hours), the judging panel in consultation with the contest director can alter the length of the contest in the event of any unforeseen difficulties. Should the contest duration be altered, every attempt will be made to notify contestants in a timely and uniform manner."/>
            <RuleItem number="6" text="A team may be disqualified for any activity that jeopardizes the contest such as dislodging extension cords, unauthorized modification of contest materials, distracting behavior or communicating with other teams. The judges can also recommend penalizing a team with additional penalty minutes for their distracting behavior."/>
            <RuleItem number="7" text="8-12 problems will be posted. So far as possible, problems will avoid dependence on detailed knowledge of a particular application area or particular contest language."/>
            <RuleItem number="8" text="Rank-list will be frozen in the final hour of the contest. During this period, teams will only get the verdict of their own submissions."/>
            <RuleItem number="9" text="Contestants cannot leave the contest arena during the contest without explicit permission from the judges/invigilators. The contestants are not allowed to communicate with any other contestants (even contestants of the same team) or coaches when they are outside the contest arena. If a team decides to leave the contest venue for the day while the contest is still running, it must inform the judges/invigilators first. No single member of a team will be allowed to leave the contest venue for the day while other member(s) are still there."/>
            <RuleItem number="10" text="Teams can bring a printed Team Reference Document. This document may contain up to 25 pages of reference materials, single-sided, letter or A4 size. Each page must be numbered in the upper right-hand corner and your university name and team name printed in the upper left-hand corner. Text and illustrations must be readable by a person with correctable eyesight without magnification from a distance of .5 meter. It may include hand-written comments and corrections on the fronts of pages only. The backside of each page must be completely empty. Nothing else will be allowed."/>
            <RuleItem number="11" text="Teams need to submit the Team Reference Document to the host volunteers on the opening day for inspection. Teams will receive it back on the next day before the main contest starts. If any team fails to do so, their document may reach the team desk late due to inspection delay."/>
            <RuleItem number="12" text="Teams are not allowed to bring any electronic devices like calculator, CD, DVD, Pen-drive, iPod, MP3/MP4 players, floppy disks, watches(smart, digital, analog), etc. Teams CANNOT bring their own keyboard, mouse, etc."/>
            <RuleItem number="13" text="Teams can only touch the workstation after the contest has started."/>
            <RuleItem number="14" text="With the help of the volunteers and judges, the contestants can have printouts of their codes for debugging purposes. Passing printout of codes to other teams is strictly prohibited and may cause disqualifications of teams involved."/>
            <RuleItem number="15" text="Teams need to seek the attention of volunteers to print codes during the contest. In each command, a team can ask for a printout of up to 10 pages. A team can ask for printouts up to 50 pages in total."/>
            <RuleItem number="16" text="Teams should inform the volunteers/invigilators/judges if they don’t get any verdict/reply within 10 minutes of submission/clarification. Teams should also notify the volunteers if they cannot log into bapsoj. These sorts of complaints will not be entertained after the contest."/>
            <RuleItem number="17" text="Codes must not use any system command or use multi-threading. Contestants must not attempt to access any other computers other than their own in the network. Violating these rules may result in disqualification."/>
            <RuleItem number="18" text="Teams using Java and Python should be extra careful about TL and ML, since problems are not tested with Java and Python."/>
            <RuleItem number="19" text="Each team will be given the same machine in the same location during the mock and main contest. That’s why teams are strongly advised to attend the mock. Any issues during mock should be notified to the judges via the clarification system."/>
            <RuleItem number="20" text="Any member of a team, if late, may not be allowed to enter the contest arena AFTER THE START OF THE CONTEST."/>
            <RuleItem number="21" text="The decision of the judges is final."/>
            <RuleItem number="22" text="Available Languages (in Bapsoj): C, C++, Java, and Python3."/>
        </div>
        </Fragment>
    );
};

const styles = {
    container: {
        maxWidth: '800px',
        margin: 'auto',
        padding: '20px',
        // fontFamily: 'Arial, sans-serif',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        textAlign: 'center',
        fontSize: '24px',
        marginBottom: '20px',
    },
    rule: {
        marginBottom: '20px',
    },
    paragraph: {
        fontSize: '16px',
        lineHeight: '1.5',
    },
};

export default Rules;