export function getTemplates() {

  return new Array(
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
  );
  
}