import storySubmissionTemplate from './storySubmission.component.html';

const STORY_SUBMISSION_LINK = 'https://getform.org/u/027515fb-4438-4ecf-ac0d-dc917c568081';
const PLACE_HOLDERS = [
  'Name',
  'Email',
  'Your story',
  'Story picture (optional)',
];

export default {
  template: storySubmissionTemplate,
  controller: ['$sce', function($sce){
    var $ctrl = this;
    $ctrl.storySubmissionLink = $sce.trustAsResourceUrl(STORY_SUBMISSION_LINK);
    $ctrl.placeHolders = PLACE_HOLDERS;
  }],
};
