
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
          menubar: 'edit view insert format tools table help',
          plugins: [
            'a11ychecker advcode advlist anchor autolink code fullscreen help image imagetools',
            ' lists link media noneditable powerpaste preview',
            ' searchreplace table template tinymcespellchecker visualblocks wordcount'
          ],
          toolbar:
              'template code a11ycheck | \
               undo redo | \
               formatselect | \
               bold italic forecolor backcolor | \
               bullist numlist outdent indent | \
               alignleft aligncenter alignright alignjustify | \
               help',
          template_mdate_format: '%d/%m/%Y : %H:%M',
          template_replace_values: {
            username: 'Jack Black',
            staffid: '991234',
            inboth_username: 'Famous Person',
            inboth_staffid: '2213',
          },
          template_preview_replace_values: {
            preview_username: 'Jack Black',
            preview_staffid: '991234',
            inboth_username: 'Famous Person',
            inboth_staffid: '2213',
          },
          templates : [
            {
              title: 'Date modified example',
              description: 'Adds a timestamp indicating the last time the document modified.',
              content: '<p>Last Modified: <time class="mdate">This will be replaced with the date modified.</time></p>'
            },
            {
              title: 'Replace values example',
              description: 'These values will be replaced when the template is inserted into the editor content.',
              content: '<p>Name: {$username}, StaffID: {$staffid}</p>'
            },
            {
              title: 'Replace values preview example',
              description: 'These values are replaced in the preview, but not when inserted into the editor content.',
              content: '<p>Name: {$preview_username}, StaffID: {$preview_staffid}</p>'
            },
            {
              title: 'Replace values preview and content example',
              description: 'These values are replaced in the preview, and in the content.',
              content: '<p><img src="https://logos-download.com/wp-content/uploads/2016/12/DBS_Bank_logo_logotype.png" alt="DBS logo" width="114" height="40" />&nbsp;</p> <table style="height: 185px; width: 630px;"> <tbody> <tr> <td style="width: 160px;">Date</td> <td style="width: 454px;">&nbsp;</td> </tr> <tr> <td style="width: 160px;">Application</td> <td style="width: 454px;">{$businessService}</td> </tr> <tr> <td style="width: 160px;">Overall Incident Status</td> <td style="width: 454px;">&nbsp;</td> </tr> <tr> <td style="width: 160px;">Priority</td> <td style="width: 454px;">{$priority}</td> </tr> <tr> <td style="width: 160px;">Severity</td> <td style="width: 454px;">{$severity}</td> </tr> <tr> <td style="width: 160px;">Incident Number</td> <td style="width: 454px;">&nbsp;</td> </tr> <tr> <td style="width: 160px;">Incident Summary</td> <td style="width: 454px;">{$incidentSummary}</td> </tr> <tr> <td style="width: 160px;">&nbsp;</td> <td style="width: 454px;">&nbsp;</td> </tr> <tr> <td style="width: 160px;">Latest Update:</td> <td style="width: 454px;">&nbsp;</td> </tr> <tr> <td style="width: 160px;">&lt;time class="mdate"&gt;This will be replaced with the date modified.&lt;/time&gt;</td> <td style="width: 454px;">&nbsp;</td> </tr> <tr> <td style="width: 160px;">Previous Updates:</td> <td style="width: 454px;">&nbsp;</td> </tr> <tr> <td style="width: 160px;">&nbsp;</td> <td style="width: 454px;"> <p>{$previousUpdates}</p> </td> </tr> </tbody> </table>'
            }
          ],
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