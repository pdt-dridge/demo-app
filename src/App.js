
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import pdlogo from './images/PagerDuty-Logo.png';

class App extends React.Component {
  handleEditorChange = (e) => {
    console.log(
      'Content was updated:',
      e.target.getContent()
    );
  }

  render() {
    return (
    <div className="App">
      <div>
        <p><img src={pdlogo} alt="" width="245px" height="62px" /></p>
        <h2>Status Update Email Notifications</h2>
      </div>
      <Editor
        initialValue="<p>Initial content</p>"
        apiKey="mv9mc9l0bmixqowosqc3mq7nekrezxptz3zlsgfohlj7zscf"
        init={{
          height: 500,
          menubar: tools,
          plugins: [
            'a11ychecker advcode advlist anchor autolink code fullscreen help image imagetools tinydrive',
            ' lists link media noneditable powerpaste preview',
            ' searchreplace table template tinymcespellchecker visualblocks wordcount'
          ],
          toolbar:
              'template code | \
               insertfile a11ycheck undo redo | formatselect | \
               bold italic | forecolor backcolor | \
               bullist numlist outdent indent | \
               alignleft aligncenter alignright alignjustify | \
               bullist numlist | help',
        }}
        onChange={this.handleEditorChange}
      />
       <p>
          Edit <code>src/App.js</code> and save to reload this page.
        </p>

    </div>
    );
  }
}

export default App;