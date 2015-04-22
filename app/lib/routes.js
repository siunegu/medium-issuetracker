Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.onBeforeAction(function() {
	if (!Meteor.user()) {
		this.render('AccessDenied');
	} else {
		this.next();
	}
}, { only: ['issueslist', 'insertIssue'] });

// HOME ROUTE
Router.route('/', function() {
	this.render('home');
})

// GENERATED ROTUES
Router.route('/insert_issue', {
  name: 'insertIssue',
  controller: 'IssuesController',
  action: 'insert',
  where: 'client'
});

Router.route('/issues_list', {
  name: 'issuesList',
  controller: 'IssuesController',
  action: 'list',
  where: 'client'
});

Router.route('/issue/:_id', {
  name: 'issues:Id',
  controller: ':IssuesController',
  action: 'edit',
  where: 'client'
});