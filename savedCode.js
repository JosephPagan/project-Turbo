<% for(var u = 0; u < shopDataArray[0].employeeData.length; u++) {%>
    <li class="employeeListItem"><a href="/employee?index=<%= u %>">
        <div class="employeeIndInfo">
            <h4><%= shopDataArray[0].employeeData[u].name %></h4>
            <span><%= shopDataArray[0].employeeData[u].position.toUpperCase() %></span>
            <h5><%= shopDataArray[0].employeeData[u].employee_type %></h5>
            <h5><%= shopDataArray[0].employeeData[u].phone %></h5>
            <section class="employeeJobContainer">
                <label for="employeeActiveJobs">Active Jobs: </label>
                <span id="employeeActiveJobs"><%= shopDataArray[0].employeeData[u].jobs.activeJobs %></span>
                <label for="employeeCompletedJobs">Completed Jobs: </label>
                <span id="employeeCompletedJobs"><%= shopDataArray[0].employeeData[u].jobs.completedJobs %></span>
            </section>
        </div>
    </a></li>
<% } %>