
import React from 'react';
import {useLocation} from "react-router-dom";
import { Editor } from '@tinymce/tinymce-react';
import pdlogo from './images/PagerDuty-Logo.png';
import {getTemplates} from './templateList.js';

class App extends React.Component {
  handleEditorChange = (e) => {
    console.log(
      'Content was updated:',
      e.target.getContent()
    );
  }

  render() {

    const search = useLocation().search;
    const incidentId = new URLSearchParams(search).get('incidentId');

    return (
    <div className="App">
      <div>
        <p><img src={pdlogo} alt="" width="245px" height="62px" /></p>
        <h2>Status Update Email Notifications for Incident {incidentId} </h2>
      </div>
      <Editor 
        initialValue="<p>^^ Select a Template from the icon above for incident {incidentId} </p>"
        apiKey="mv9mc9l0bmixqowosqc3mq7nekrezxptz3zlsgfohlj7zscf"
        init={{
          height: "500",
          width: "80%",
          menubar: 'edit view insert format tools table help',
          plugins: [
            ' advlist anchor autolink code fullscreen help image imagetools',
            ' lists link media noneditable preview',
            ' searchreplace table template visualblocks wordcount'
          ],
          toolbar:
              'template code | \
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
          templates : getTemplates(),
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