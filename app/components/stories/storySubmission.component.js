import storySubmissionTemplate from './storySubmission.component.html';

/*
 * // Jason's test link:
 * const STORY_SUBMISSION_LINK = 'https://getform.org/u/027515fb-4438-4ecf-ac0d-dc917c568081';
 */
const STORY_SUBMISSION_LINK = 'https://www.getform.org/u/171c46e8-ed38-40a3-a5de-7d8ac7f61a3d';
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
