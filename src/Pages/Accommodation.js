import React, { Fragment } from 'react';
import TopMenu from '../Components/TopMenu';
import InfoDiv from '../MyComponents/InfoDiv';


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

const tableStyle = {
  width: '100%',
  margin: '20px'
};

const tableRowStyle = {
  height: '40px',
}
const languageData = [
  { name: 'C', compiler: 'gcc-12', version: '12.3.0', alias: 'gcc' },
  { name: 'C++', compiler: 'g++-12', version: '12.3.0', alias: 'g++' },
  { name: 'Java', compiler: 'openjdk17', version: '17.0.x', alias: 'java' },
  { name: 'Python 3', compiler: 'python3.10', version: '3.10.12', alias: 'python3, python3.10' },
  { name: 'Python 3.11', compiler: 'python3.11', version: '3.11.0rc1', alias: 'python3.11' }
];

const editorsData = [
  { name: 'VIM - Vi IMproved', version: '8.2', alias: 'vim', config: 'Feature list, vimrc' },
  { name: 'GNU Emacs', version: '27.1', alias: 'emacs', config: '' },
  { name: 'GNU nano', version: '6.2', alias: 'nano', config: '' },
  { name: 'Sublime Text', version: '4 (Build 4152)', alias: 'subl', config: '' },
  { name: 'Visual Studio Code', version: '1.82.3', alias: 'code', config: '' },
  { name: 'gedit', version: '41.0', alias: 'gedit', config: '' }
];

const ideData = [
  { name: 'Code::Blocks', version: '20.03', alias: 'codeblocks', config: '+codeblocks-contrib, +codeblocks-common Default Settings' },
  { name: 'Geany', version: '1.38', alias: 'geany', config: '' },
  { name: 'PyCharm', version: '2023.1, Community Edition', alias: '', config: '' },
  { name: 'IntelliJ IDEA', version: '2023.2, Community Edition', alias: '', config: '' },
  { name: 'Eclipse', version: '2023-09', alias: '', config: '' }
];

const features = `
+acl               +file_in_path      +mouse_urxvt       -tag_any_white
+arabic            +find_in_path      +mouse_xterm       +tcl
+autocmd           +float             +multi_byte        +termguicolors
+autochdir         +folding           +multi_lang        +terminal
-autoservername    -footer            -mzscheme          +terminfo
+balloon_eval      +fork()            +netbeans_intg     +termresponse
+balloon_eval_term +gettext           +num64             +textobjects
+browse            -hangul_input      +packages          +textprop
++builtin_terms    +iconv             +path_extra        +timers
+byte_offset       +insert_expand     +perl              +title
+channel           +ipv6              +persistent_undo   +toolbar
+cindent           +job               +popupwin          +user_commands
+clientserver      +jumplist          +postscript        +vartabs
+clipboard         +keymap            +printer           +vertsplit
+cmdline_compl     +lambda            +profile           +vim9script
+cmdline_hist      +langmap           -python            +viminfo
+cmdline_info      +libcall           +python3           +virtualedit
+comments          +linebreak         +quickfix          +visual
+conceal           +lispindent        +reltime           +visualextra
+cryptv            +listcmds          +rightleft         +vreplace
+cscope            +localmap          +ruby              +wildignore
+cursorbind        +lua               +scrollbind        +wildmenu
+cursorshape       +menu              +signs             +windows
+dialog_con_gui    +mksession         +smartindent       +writebackup
+diff              +modify_fname      +sodium            +X11
+digraphs          +mouse             +sound             -xfontset
+dnd               +mouseshape        +spell             +xim
-ebcdic            +mouse_dec         +startuptime       +xpm
+emacs_tags        +mouse_gpm         +statusline        +xsmp_interact
+eval              -mouse_jsbterm     -sun_workshop      +xterm_clipboard
+ex_extra          +mouse_netterm     +syntax            -xterm_save
+extra_search      +mouse_sgr         +tag_binary
-farsi             -mouse_sysmouse    -tag_old_static
`.trim().split(/\s+/);

const chunkedFeatures = [];
const chunkSize = 4;
for (let i = 0; i < features.length; i += chunkSize) {
  chunkedFeatures.push(features.slice(i, i + chunkSize));
}
const Accommodation = () => {
  return (
    <Fragment>
      <TopMenu />
      <div className='title mt-3 mb-3' style={styles.container}>
        <InfoDiv info="Accommodation Facilities for JU NCPC 2023 " gradient="linear-gradient(45deg, #FF5252 30%, #FF1744 90%)"></InfoDiv>
        <p>
          Are you and your team gearing up for the National Collegiate Programming Contest (NCPC) at Jahangirnagar University on 08-09 March 2024 and need accommodation facilities? We have a very limited amount of accommodation facilities (self-financed/ paid service) near Jahangirnagar University.
          We will provide transport facilities on four different routes from Dhaka City to JU. So, the teams from outside of Dhaka who can’t manage accommodation by themselves, are requested to email us in the following format by this Monday (04/03/2024). Our team will contact you. Those who have already emailed us do not need to send email again.
        </p>
        <h4 className='mt-4'>Follow the simple steps below to request accommodation for your team:</h4>
        <div>
          <ol>
            <li>Compose an Email: Email pc.cse@juniv.edu with the subject line "Request for Accommodation."</li>
            <li>
              Include the Following Information:
              <ul>
                <li>Team Name:</li>
                <li>University Name:</li>
                <li>Date (Night) of stay: March 8 / March 9 / Both March 8 and 9. </li>
                <li>Team Member Information: Include the following details for each team member (Team Member 1, Team Member 2, Team Member 3):
                  <ol>
                    <li>Full Name</li>
                    <li>Contact Information</li>
                  </ol>
                </li>
              </ul>
            </li>
            <li>Coach Information:
              <ul>
                Include information about the coach:
                <li>Full Name
                </li>
                <li>Contact Information</li>
              </ul>
            </li>
            <li>Any Additional Request:
              <ul>
                <li>Such as additional facilities for coaches/female contestants/disabled people or anything else.</li>
              </ul>
            </li>
          </ol>
          <p>Once we receive your email, our team will swiftly process your request and provide further details regarding accommodation facilities. Feel free to reach out to us.</p>
          <p>JU NCPC 2023</p>
          <p>Happy Coding!!!!</p>
        </div>        
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

export default Accommodation;