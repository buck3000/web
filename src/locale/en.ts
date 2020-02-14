/* eslint-disable max-len */
import { TranslationFn, TranslationData } from '@zoonk/models';

const translate: TranslationFn = (key, args) => {
  const data: TranslationData = {
    about_me: 'About me',
    about_list: 'List of pages about how Zoonk works',
    add_image: 'Add image',
    admin: 'Admin',
    advanced: 'Advanced',
    after: 'After',
    already_have_account: 'Already have an account? Sign in',
    already_logged_in: 'You are already logged in.',
    back_to_login: 'Back to the login form',
    before: 'Before',
    beginner: 'Beginner',
    by: 'by',
    cancel: 'Cancel',
    chapter_add: 'Add a new chapter',
    chapter_edit: 'Edit chapter',
    chapter_invalid_id: 'You cannot create a chapter without a pathId.',
    chapter: 'Chapter',
    chapters: 'Chapters',
    choose_language: 'Choose a language',
    close: 'Close',
    comment_leave: 'Leave a comment',
    comment_login_required: 'You need to be logged in to leave a comment.',
    comments: 'Comments',
    comments_count:
      Number(args?.comments) === 1
        ? `${args?.comments} comment`
        : `${args?.comments} comments`,
    confirm: 'Confirm',
    confirmation: 'Confirmation',
    contact_us: 'Contact us',
    content: 'Content',
    courses_books: 'Courses & books',
    courses: 'Courses',
    create: 'Create',
    created: 'created',
    created_on: `Created on ${args?.date}`,
    creating_account: 'Creating account...',
    current_item: 'Current item',
    delete_confirmation: 'Would you like to delete this item?',
    delete: 'Delete',
    deleted: 'deleted',
    deleting: 'Deleting...',
    description: 'Description',
    done: 'Done!',
    dont_have_account: "Don't have an account? Sign up!",
    edit: 'Edit',
    edit_history: 'Edit history',
    edit_not_allowed: 'You are not allowed to edit this content.',
    edit_page: 'Edit this page',
    edit_profile: 'Edit profile',
    edit_topic: 'Edit topic',
    edited_on: `Edited on ${args?.date}`,
    email: 'Email address',
    error_action: 'An error happened. Please, try again.',
    examples: 'Examples',
    expert: 'Expert',
    feedback: 'Feedback',
    field_required: 'Field required',
    file_too_big: 'This file is too big. The maximum size is 2MB.',
    forgot_password: 'Forgot password?',
    formatting_bold_example: '**some bold text**',
    formatting_bold: 'Bold',
    formatting_code_inline_example: '`var test = 1`',
    formatting_code_inline: 'Code (inline)',
    formatting_code_multiline_example: '```var test=1;```',
    formatting_code_multiline: 'Code (multiline)',
    formatting_drive_example: '[[ drive id="google-drive-id" ]]',
    formatting_drive: 'Google Drive',
    formatting_header_example: '# Title',
    formatting_header: 'Header',
    formatting_image_example: '![alt text](photo.png "photo title")',
    formatting_image: 'Image',
    formatting_italic_example: '_italic text_',
    formatting_italic: 'Italic',
    formatting_link_example: '[zoonk](https://en.zoonk.org)',
    formatting_link: 'Link',
    formatting_ol_example: '1. item 1; 2. item 2...',
    formatting_ol: 'Ordered list',
    formatting_pdf_example: '[[ pdf url="https://myaddress.com/file.pdf" ]]',
    formatting_pdf: 'PDF file',
    formatting_quote_example: '> I know that I know nothing.',
    formatting_quote: 'Quote',
    formatting_tips: 'Formatting tips',
    formatting_ul_example: '- some item; - another item...',
    formatting_ul: 'Unordered list',
    formatting_vimeo_example: '[[ vimeo id="video-id" ]]',
    formatting_vimeo: 'Vimeo',
    formatting_youtube_example: '[[ youtube id="video-id" ]]',
    formatting_youtube: 'YouTube',
    go_back: 'Go back',
    go_home: 'Go to the home page.',
    having_issues:
      'Are you finding this confusing or are you having any issues?',
    home: 'Home',
    items_empty: 'No items found.',
    leaderboard: 'Leaderboard',
    learn_about: `Learn about ${args?.title}`,
    learningPaths: 'Learning paths',
    let_us_know: 'Please, let us know.',
    lessons_limit:
      'You cannot create more than 10 lessons in the same chapter. Please, split them in different chapters instead.',
    lessons: 'Lessons',
    level: 'Level',
    like: 'Like',
    liked: 'Liked',
    likes_count:
      Number(args?.likes) === 1
        ? `${args?.likes} like`
        : `${args?.likes} likes`,
    link_helper: 'Add a link to a reference',
    link: 'Link',
    load_more: 'Load more',
    login: 'Login',
    login_required: 'You need to be logged in to access this section.',
    logout: 'Log out',
    menu: 'Menu',
    message: 'Message',
    my_notes: 'My notes',
    my_studies: 'My studies',
    name: 'Name',
    need_to_be_loggedin: 'You need to be logged in to perform this action.',
    next_lesson: 'Next lesson',
    notes_first:
      'Write your first note. Your notes are private. They will only be visible to you.',
    notes_new: 'Create a note',
    notes_required_fields:
      'Please, fill in the title or the description field.',
    notifications: 'Notifications',
    order: 'Order',
    page_edits: 'Page changes',
    page_edits_title: 'Page changes for:',
    page_list: 'Page list',
    password_change: 'Password change',
    password_new: 'New password',
    password_old: 'Current password',
    password: 'Password',
    path_add: 'Create a learning path',
    path_edit: 'Edit path',
    path: 'Path',
    paths: 'Paths',
    photo_suggested_size: `Suggested size: ${args?.size}`,
    photo_update: 'Update photo',
    photo_uploaded: 'Uploaded photo',
    photo: 'Photo',
    post_add: 'Create a post',
    post_edit: 'Edit post',
    posts: 'Posts',
    premium: 'Premium',
    preview: 'Preview',
    preview_quit: 'Back to the editor',
    privacy_policy: 'Privacy policy',
    pro: 'Pro',
    profile: 'Profile',
    questions: 'Questions',
    read_wikipedia: 'Read on Wikipedia',
    real_life_examples: 'Real-life examples',
    replies: 'Replies',
    report: 'Report',
    reports: 'Reports',
    report_confirmation:
      'Please, click on the "confirm" button to report this content and its author. Optionally, you can also add a comment below explaining why this content should not be on Zoonk:',
    report_issue: 'Report an issue',
    report_progress: 'Reporting this user...',
    report_success:
      'Thank you for reporting this issue. You are helping to make a better community for all :)',
    report_tooltip:
      'Report if you think this content does not follow our terms of use.',
    reset_password: 'Reset password',
    reset_password_sending: 'Resetting your password...',
    reset_password_sent: 'A new password was sent to your e-mail address.',
    response_deleted: 'Deleted!',
    revert: 'Revert',
    revert_confirmation: 'Would like to revert to the previous changes?',
    revert_progress: 'Reverting changes...',
    revert_success: 'Changes reverted! Thanks!',
    revert_tooltip: 'Cancel this change and revert it to the previous version.',
    save: 'Save',
    save_changes: 'Save changes',
    saved: 'Saved!',
    saved_limit_reached:
      'You cannot save more than 20 items on a free acount. Please, upgrade your plan to save new items.',
    saved_no_items:
      'You did not save any items yet. Use the save option to track items you would like to study.',
    saving: 'Saving...',
    search: 'Search',
    search_ph: 'Press Enter to search',
    search_topic: 'Search a topic name',
    search_topic_help:
      'We use Wikipedia as the source for topics. To create a new topic, you need to choose an existing Wikipedia page. You can search for topic names by typing a word and selecting an item in the box below.',
    search_topic_not_found: 'No topics found. Try another word.',
    see_all: 'See all',
    see_all_edits: 'See all edits',
    selected_item: 'Selected item',
    send: 'Send',
    sending: 'Sending...',
    sent: 'Sent!',
    seo_contact_desc: 'How to contact the Zoonk team.',
    seo_edits_desc:
      'See all changes made to Zoonk pages. Navigate the whole edit history, revert and report changes on Zoonk.',
    seo_examples_desc:
      'Find real-life examples about everything. See how things work in everyday life.',
    seo_home_desc:
      'Learn anything online for free. Zoonk is a social network for learning (for students and teachers). A social network to study online.',
    seo_home_title: 'Zoonk: The social network for learning',
    seo_learningPaths_desc:
      'Find learning paths to learn anything you want. Guided ways to learn about anything using collaborative learning paths.',
    seo_login_desc: 'How to sign in to my Zoonk account.',
    seo_notes_desc: 'How to save notes about subjects I am studying.',
    seo_posts_desc:
      'Find posts and articles about any subject. Learn by reading free posts online.',
    seo_profile_desc: `${args?.name} is learning and teaching on Zoonk. See what ${args?.name} is creating.`,
    seo_profile_paths_desc: `Learning paths created by ${args?.name} on Zoonk. Learning material provided by ${args?.name}.`,
    seo_profile_paths_title: `Learning paths by ${args?.name}`,
    seo_profile_posts_desc: `Posts written by ${args?.name}. Find all articles published by ${args?.name}.`,
    seo_profile_posts_title: `Posts by ${args?.name}`,
    seo_profile_topics_desc: `${args?.name} is teaching about many topics online. See all topics created by ${args?.name} on Zoonk.`,
    seo_profile_topics_title: `Topics by ${args?.name}`,
    seo_reset_password_desc: 'How can I recover or reset my Zoonk password?',
    seo_search_desc: `Start learning about ${args?.searchTerm} on Zoonk. How ${args?.searchTerm} works.`,
    seo_search_title: `Learn about ${args?.searchTerm} on Zoonk`,
    seo_settings_desc: 'How to configure and edit my Zoonk profile.',
    seo_signup_desc: 'Create a Zoonk account to learn anything for free.',
    seo_studies_desc:
      'How to track my studies online using Zoonk. How to save for later things I want to learn.',
    seo_studies_title: 'Track my studies',
    seo_topic_desc: `Learn about ${args?.title}. How to learn about ${args?.title} for free online.`,
    seo_topic_courses_desc: `Courses and books about ${args?.title}. The best ${args?.title} courses online.`,
    seo_topic_courses_title: `${args?.title} courses and books`,
    seo_topic_examples_desc: `How does ${args?.title} work in real life. Examples of ${args?.title} in everyday life.`,
    seo_topic_examples_title: `${args?.title} in real life`,
    seo_topic_paths_desc: `Learning paths about ${args?.title}. Collaborative ways to learn ${args?.title} online.`,
    seo_topic_paths_title: `Learning paths about ${args?.title}`,
    seo_topic_posts_desc: `Find posts about ${args?.title}. Most interesting articles about ${args?.title} online.`,
    seo_topic_posts_title: `Posts about ${args?.title}`,
    seo_topic_questions_desc: `Ask anything about ${args?.title}. Find every questions and answer about ${args?.title}.`,
    seo_topic_questions_title: `Ask questions about ${args?.title}`,
    seo_topics_desc: 'Learn about any topic or subject on Zoonk for free.',
    seo_topics_create_desc: 'How to create a new topic or subject on Zoonk.',
    settings: 'Settings',
    signin_facebook: 'Sign in with Facebook',
    signin_google: 'Sign in with Google',
    signing_in: 'Signing in...',
    signup: 'Sign up',
    signup_notice: 'By signing up, you agree to our',
    signup_notice_and: 'and the',
    social_description:
      'Zoonk is a social network where you can learn anything for free.',
    subscribe_free_desc: '20 saved items\n20 notes',
    subscribe_free_price: '€0',
    subscribe_free_title: 'Free',
    subscribe_premium_btn: 'Upgrade',
    subscribe_premium_desc:
      'Unlimited saved items\nUnlimited notes\nNo ads\nSupport free learning\nIt costs less than €0.06 per day!',
    subscribe_premium_price: '€19.90',
    subscribe_premium_title: 'Premium',
    subscribe_success_desc:
      'Your support is very important. If you have any questions or suggestions, please let us know.',
    subscribe_success_title: 'Thank you! =)',
    subscription: 'Subscription',
    terms_service: 'Terms of service',
    text: 'Text',
    title: 'Title',
    title_required: 'Please, fill in the title.',
    topic_create: 'Create topic',
    topic_create_desc: 'Select a topic name:',
    topic_selector_helper:
      'What subjects are you teaching? (e.g. Chemistry, Star Trek, History, etc.).',
    topics: 'Topics',
    updated: 'edited',
    upgrade_desc:
      'Zoonk is free and open-source because we believe knowledge should be accessible to everyone. By upgrading to premium, you help us keep Zoonk free.',
    upgrade_premium: 'Upgrade to premium',
    upgrade_title: 'Support free education',
    uploading: 'Uploading...',
    url: 'URL',
    username: 'Username',
    username_exists: 'This username already exists.',
    video: 'Video',
    video_link: 'Video URL',
    view: 'View',
    year: 'Year',
  };

  return data[key] || key;
};

export default translate;
