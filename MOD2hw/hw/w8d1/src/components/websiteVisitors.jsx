import Graph from "./graph"
function WebsiteVisitors(props){
  return (
    <div className = "WebsiteVisitors">
      <h3>Website Visitors</h3>
      <p>{ props.visitorAmount }</p>
      <Graph/>
    </div>
  )
}

export default WebsiteVisitors