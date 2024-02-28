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
const ContestEnvironment = () => {
  return (
    <Fragment>
      <TopMenu />
      <div className='title mt-3 mb-3' style={styles.container}>
        <InfoDiv  info="Contest Environment" gradient="linear-gradient(45deg, #FF5252 30%, #FF1744 90%)"></InfoDiv>
        <h2 className='mt-4'>Specification of Contestant PC</h2>
        <h2 >Operating System</h2>
        <div>
          <ul>
            <li>Compilers and Interpreters</li>
            <li>Editors</li>
            <li>IDEs</li>
            <li>APPENDIX
              <li>Vim Features</li>
              <li>.vimrc</li>
              <li>Code::Blocks Default Settings Checklist</li>
            </li>
          </ul>
        </div>

        <h2>Operating System</h2>
        <p>Ubuntu 22.04.3 LTS (Jammy Jellyfish)</p>

        <h2>Compilers and Interpreters</h2>
        <table style={tableStyle}>
          <thead>
            <tr style={tableRowStyle}>
              <th>Language</th>
              <th>Compiler/Interpreter</th>
              <th>Version</th>
              <th>Alias</th>
            </tr>
          </thead>
          <tbody>
            {languageData.map((language, index) => (
              <tr key={index} style={tableRowStyle}>
                <td>{language.name}</td>
                <td>{language.compiler}</td>
                <td>{language.version}</td>
                <td>{language.alias}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Editors</h2>
        <table style={tableStyle}>
          <thead >
            <tr style={tableRowStyle}>
              <th>Editors</th>
              <th>Version</th>
              <th>Alias</th>
              <th>Config</th>
            </tr>
          </thead>
          <tbody>
            {editorsData.map((editor, index) => (
              <tr key={index} style={tableRowStyle}>
                <td>{editor.name}</td>
                <td>{editor.version}</td>
                <td>{editor.alias}</td>
                <td>{editor.config}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>IDEs</h2>
        <table style={tableStyle}>
          <thead>
            <tr style={tableRowStyle}>
              <th>IDE</th>
              <th>Version</th>
              <th>Alias</th>
              <th>Config</th>
            </tr>
          </thead>
          <tbody>
            {ideData.map((ide, index) => (
              <tr key={index} style={tableRowStyle}>
                <td>{ide.name}</td>
                <td>{ide.version}</td>
                <td>{ide.alias}</td>
                <td>{ide.config}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>APPENDIX Vim Features</h2>
        <h4>Huge version with GTK3 GUI.  Features included (+) or not (-):</h4>
        <table>
          <tbody>
            {chunkedFeatures.map((chunk, index) => (
              <tr key={index}>
                {chunk.map((feature, idx) => (
                  <td key={idx}>{feature}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <h2>vimrc</h2>
        <ul>
          <li>syntax on</li>
          <li>set termguicolors {"\t".repeat(30)}{"// use full 24-bit color"}</li>
          <li>set number {"\t".repeat(43)}{"// show line numbers"}</li>
          <li>set autoindent {"\t".repeat(39)}{"// automatic indent"}</li>
          <li>set foldmethod=syntax {"\t".repeat(32)}{"// syntax based folding"}</li>
          <li>set nofoldenable {"\t".repeat(33)}{"// don't open file in folds"}</li>
          <li>set cursorline {"\t".repeat(37)}{"// highlight the line under cursor"}</li>
          <li>set laststatus=2 {"\t".repeat(35)}{"// show status bar"}</li>
          <li>set linebreak {"\t".repeat(36)}{"// don't break words"}</li>
          <li>set scrolloff=5 {"\t".repeat(34)}{"// let 5 lines after cursor"}</li>
          <li>set showcmd {"\t".repeat(38)}{"// show commands"}</li>
          <li>set wildmenu {"\t".repeat(39)}{"// display all matching files when we tab-complete"}</li>
          <li>set tabstop=4 {"\t".repeat(38)}{"// tab size in columns"}</li>
          <li>set shiftwidth=4 {"\t".repeat(37)}{"// indentation size"}</li>
          <li>{"\t".repeat(39)}{"// https://medium.com/@arisweedler/tab-settings-in-vim-1ea0863c5990"}</li>
          <li>set noexpandtab {"\t".repeat(36)}{"// don't insert spaces, default"}</li>
          <li>set backspace=indent,eol,start {"\t".repeat(32)}{"// get backspace to work on these situations"}</li>
        </ul>
        <h2>Code::Blocks Default Settings Checklist</h2>
        <p>The following are already done for you:</p>
        <div>
          <h2>Settings Instructions</h2>
          <p>Go to Settings -&gt; Editor -&gt; General Settings and check (✓) the following items:</p>
          <ul>
            <li>Auto Indentation</li>
            <li>Auto brace completion</li>
            <li>Show line number</li>
          </ul>
          <p>Unnecessary shortcut buttons should be removed from the menu bar to make the coding space larger</p>
          <p>Go to Settings -&gt; Compiler -&gt; Global Settings -&gt; Compiler Settings -&gt; Compiler Flags and check (✓) the following items:</p>
          <ul>
            <li>Have g++ follow the C++17 ISO [-std=c++17]</li>
            <li>Optimize even more (for speed) [-O2]</li>
          </ul>
          <p>Go to Settings -&gt; Environment -&gt; General Settings -&gt; Terminal to launch console programs, select gnome-terminal from the drop-down list.</p>
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

export default ContestEnvironment;