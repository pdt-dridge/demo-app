
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
        initialValue="<p>Select a Template</p>"
        apiKey="mv9mc9l0bmixqowosqc3mq7nekrezxptz3zlsgfohlj7zscf"
        init={{
          height: "500",
          width: "80%",
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
          template_selected_content_classes: 'selcontent selectedcontent',
          template_replace_values: {
            businessService: 'todo: incident.businessService',
            priority: 'todo: incident.priority',
            severity: 'todo: incident.severity',
            incidentSummary: 'todo: incident.summary',
            previousUpdates: 'todo: getPrevUpdates()',
          },
          template_preview_replace_values: {
            businessService: 'todo: incident.businessService',
            priority: 'todo: incident.priority',
            severity: 'todo: incident.severity',
            incidentSummary: 'todo: incident.summary',
            previousUpdates: 'todo: getPrevUpdates()',
          },
          templates : [
            {
              title: 'Date modified example',
              description: 'Adds a timestamp indicating the last time the document modified.',
              content: '<p>Last Modified: <time class="mdate">This will be replaced with the date modified.</time></p>'
            },
            {
              title: 'DBS Incident Management',
              description: 'Template for DBS Incident Management Status Updates',
              url: "template/dbsTemplate.html"
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