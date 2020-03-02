/* eslint-disable max-len */
import { TranslationFn, TranslationData } from '@zoonk/models';

const translate: TranslationFn = (key, args) => {
  const data: TranslationData = {
    about_list: 'Lista de páginas sobre como o Zoonk funciona',
    about_me: 'Sobre mim',
    add_image: 'Inserir imagem',
    admin: 'Admin',
    advanced: 'Avançado',
    after: 'Depois',
    already_have_account: 'Já tem uma conta? Entre agora',
    already_logged_in: 'Você já está logado.',
    back_to_login: 'Voltar para a página de acesso',
    before: 'Antes',
    beginner: 'Iniciante',
    by: 'por',
    cancel: 'Cancelar',
    chapter_add: 'Crie um novo capítulo',
    chapter_edit: 'Editar capítulo',
    chapter_invalid_id:
      'Você não pode criar um capítulo sem uma ID válida para a trilha de aprendizagem.',
    chapter: 'Capítulo',
    chapters: 'Capítulos',
    choose_language: 'Escolha um idioma',
    close: 'Fechar',
    comment_leave: 'Deixe um comentário',
    comment_login_required:
      'Você precisa estar logado para deixar um comentário.',
    comments: 'Comentários',
    comments_count:
      Number(args?.comments) === 1
        ? `${args?.comments} comentário`
        : `${args?.comments} comentários`,
    confirm: 'Confirmar',
    contact_us: 'Fale conosco',
    content: 'Conteúdo',
    courses_books: 'Cursos & livros',
    courses: 'Cursos',
    create: 'Criar',
    created: 'criado',
    created_on: `Criado em ${args?.date}`,
    creating_account: 'Criando conta...',
    current_item: 'Item atual',
    delete_confirmation: 'Você gostaria de excluir este item?',
    delete: 'Excluir',
    deleted: 'excluído',
    deleting: 'Apagando...',
    description: 'Descrição',
    done: 'Feito!',
    dont_have_account: 'Não tem conta? Cadastre-se!',
    edit: 'Editar',
    edit_history: 'Histórico',
    edit_not_allowed: 'Você não tem permissão para editar este conteúdo.',
    edit_page: 'Editar esta página',
    edit_profile: 'Editar perfil',
    edit_topic: 'Editar tópico',
    edited_on: `Editado em ${args?.date}`,
    email: 'E-mail',
    error_action: 'Ocorreu um erro. Por favor, tente novamente.',
    examples: 'Exemplos',
    expert: 'Especialista',
    feedback: 'Feedback',
    field_required: 'Campo obrigatório',
    file_too_big: 'Este arquivo é muito grande. O tamanho máximo é 2MB.',
    forgot_password: 'Esqueceu a senha?',
    formatting_bold_example: '**texto em negrito**',
    formatting_bold: 'Negrito',
    formatting_code_inline_example: '`var teste = 1`',
    formatting_code_inline: 'Código (mesma linha)',
    formatting_code_multiline_example: '```var teste=1;```',
    formatting_code_multiline: 'Código (várias linhas)',
    formatting_drive_example: '[[ drive id="id-do-arquivo-no-drive" ]]',
    formatting_drive: 'Google Drive',
    formatting_header_example: '# Título',
    formatting_header: 'Cabeçalho',
    formatting_image_example: '![descrição](foto.png "título")',
    formatting_image: 'Imagem',
    formatting_italic_example: '_texto em itálico_',
    formatting_italic: 'Itálico',
    formatting_link_example: '[zoonk](https://pt.zoonk.org)',
    formatting_link: 'Link',
    formatting_ol_example: '1. item 1; 2. item 2...',
    formatting_ol: 'Lista ordenada',
    formatting_pdf_example: '[[ pdf url="https://meusite.com/arquivo.pdf" ]]',
    formatting_pdf: 'Arquivo PDF',
    formatting_quote_example: '> Só sei que nada sei.',
    formatting_quote: 'Citação',
    formatting_tips: 'Dicas de formatação',
    formatting_ul_example: '- algum item; - outro item...',
    formatting_ul: 'Lista não-ordenada',
    formatting_vimeo_example: '[[ vimeo id="video-id" ]]',
    formatting_vimeo: 'Vimeo',
    formatting_youtube_example: '[[ youtube id="video-id" ]]',
    formatting_youtube: 'YouTube',
    go_back: 'Voltar',
    go_home: 'Ir para a página inicial.',
    having_issues: 'Está achando complicado ou encontrando alguma dificuldade?',
    home: 'Início',
    items_empty: 'Nenhum item encontrado.',
    leaderboard: 'Ranking',
    learn_about: `Aprenda sobre ${args?.title}`,
    learn: 'Aprender',
    lessons: 'Lições',
    let_us_know: 'Por favor, nos avise.',
    level: 'Nível',
    like: 'Curtir',
    liked: 'Você curtiu',
    likes_count:
      Number(args?.likes) === 1
        ? `${args?.likes} curtida`
        : `${args?.likes} curtidas`,
    link_helper: 'Link para uma referência',
    link: 'Link',
    load_more: 'Carregar mais',
    login: 'Entrar',
    login_required: 'Você precisa estar logado para acessar esta área.',
    logout: 'Sair',
    menu: 'menu',
    message: 'Mensagem',
    name: 'Nome',
    need_to_be_loggedin: 'Você precisa estar logado para fazer isso.',
    next_lesson: 'Próxima lição',
    notifications: 'Notificações',
    order: 'Ordem',
    page_edits: 'Alterações na página',
    page_edits_title: 'Alterações na página:',
    page_list: 'Lista de páginas',
    password: 'Senha',
    password_change: 'Alterar senha',
    password_new: 'Nova senha',
    password_old: 'Senha atual',
    photo_suggested_size: `Tamanho sugerido: ${args?.size}`,
    photo_update: 'Mudar foto',
    photo_uploaded: 'Foto enviada',
    photo: 'Foto',
    post_add: 'Criar postagem',
    post_edit: 'Editar postagem',
    posts: 'Postagens',
    preview: 'Visualizar',
    preview_quit: 'Voltar ao editor',
    privacy_policy: 'Política de privacidade',
    pro: 'Profissional',
    profile: 'Perfil',
    questions: 'Perguntas',
    read_wikipedia: 'Ler na Wikipédia',
    real_life_examples: 'Exemplos na vida Real',
    replies: 'Respostas',
    report: 'Reportar',
    reports: 'Reportes',
    report_confirmation:
      'Por favor, clique no botão "confirmar" para reportar este conteúdo e o autor. Você também pode incluir um comentário abaixo explicando por que o conteúdo não deve estar no Zoonk.',
    report_issue: 'Relatar problema',
    report_progress: 'Reportando usuário...',
    report_success:
      'Obrigado por reportar esse problema. Isso ajuda a melhorar a comunidade para todos :)',
    report_tooltip: 'Reporte se esse conteúdo fere os nossos termos de uso.',
    reset_password: 'Recuperar senha',
    reset_password_sending: 'Restaurando a sua senha...',
    reset_password_sent: 'Uma nova senha foi enviada ao seu e-mail.',
    response_deleted: 'Apagado!',
    revert: 'Reverter',
    revert_confirmation: 'Tem certeza que deseja reverter as alterações?',
    revert_progress: 'Revertendo...',
    revert_success: 'Alterações revertidas! Obrigado!',
    revert_tooltip: 'Cancelar as alterações e retornar à versão anterior.',
    save: 'Salvar',
    save_changes: 'Salvar alterações',
    saved: 'Salvo!',
    saving: 'Salvando...',
    search: 'Busca',
    search_ph: 'Pressione Enter para pesquisar',
    search_topic: 'Busque um assunto',
    search_topic_help:
      'Nós usamos a Wikipedia como fonte para os assuntos. Portanto, para criar um novo assunto, você precisa escolher uma página que já existe na Wikipedia. Você pode procurar assuntos digitando uma palavra na caixa de busca abaixo.',
    search_topic_not_found: 'Nenhum tópico encontrado. Tente outra palavra.',
    see_all: 'Ver tudo',
    see_all_edits: 'Ver todas alterações',
    selected_item: 'Item selecionado',
    send: 'Enviar',
    sending: 'Enviando...',
    sent: 'Enviado!',
    seo_contact_desc: 'Como entrar em contato com a equipe do Zoonk.',
    seo_courses_desc:
      'Como encontrar cursos e livros sobre qualquer assunto. Os melhores cursos e livros online.',
    seo_edits_desc:
      'Veja todo o histórico de alterações feitas no Zoonk. Saiba como reverter ou relatar problemas no Zoonk.',
    seo_examples_desc:
      'Como a teoria funciona na prática. Exemplos de como as coisas funcionam no mundo real.',
    seo_home_desc:
      'Aprenda sobre qualquer assunto online. Como aprender de graça online. Zoonk é uma rede social para estudar, uma rede social para estudantes e professores.',
    seo_home_title: 'Zoonk: A rede social da educação',
    seo_login_desc: 'Como fazer login na minha conta do Zoonk.',
    seo_posts_desc:
      'Encontre publicações e artigos sobre qualquer assunto. Aprenda lendo artigos online de graça.',
    seo_profile_desc: `${args?.name} está ensinando e aprendendo coisas no Zoonk. Veja o que ${args?.name} está criando.`,
    seo_profile_posts_desc: `Publicações feitas por ${args?.name}. Todos os artigos publicados online por ${args?.name}.`,
    seo_profile_posts_title: `Postagens de ${args?.name}`,
    seo_profile_topics_desc: `${args?.name} está escrevendo sobre muitos assuntos interessantes. Veja os assuntos criados por ${args?.name} no Zoonk.`,
    seo_profile_topics_title: `Assuntos de ${args?.name}`,
    seo_questions_desc:
      'Como tirar dúvidas sobre qualquer assunto online. Perguntas e respostas sobre todos os temas.',
    seo_reset_password_desc:
      'Como posso recuperar ou restaurar minha senha do Zoonk?',
    seo_search_desc: `Aprenda mais sobre ${args?.searchTerm} no Zoonk. Saiba como ${args?.searchTerm} funciona.`,
    seo_search_title: `Aprenda sobre ${args?.searchTerm} no Zoonk`,
    seo_settings_desc: 'Como configurar e editar o meu perfil no Zoonk.',
    seo_signup_desc:
      'Crie uma conta no Zoonk para aprender qualquer coisa de graça.',
    seo_topic_desc: `Aprenda sobre ${args?.title}. Como aprender sobre ${args?.title} de graça online.`,
    seo_topic_courses_desc: `Cursos e livros sobre ${args?.title}. Os melhores cursos de ${args?.title} online.`,
    seo_topic_courses_title: `Cursos e livros de ${args?.title}`,
    seo_topic_examples_desc: `${args?.title} na prática. Exemplos de ${args?.title} na vida real. Como usar ${args?.title} no dia-a-dia.`,
    seo_topic_examples_title: `${args?.title} na prática`,
    seo_topic_posts_desc: `Encontre postagens sobre ${args?.title}. Os melhores artigos sobre ${args?.title} online.`,
    seo_topic_posts_title: `Fórum sobre ${args?.title}`,
    seo_topic_questions_desc: `Tire todas as dúvidas ${args?.title}. Faça perguntas e encontre respostas sobre ${args?.title} online.`,
    seo_topic_questions_title: `Tire dúvidas sobre ${args?.title}`,
    seo_topics_desc: 'Aprenda qualquer assunto de graça no Zoonk.',
    seo_topics_create_desc: 'Como criar um assunto novo no Zoonk.',
    settings: 'Configurações',
    signin_facebook: 'Entre com o Facebook',
    signin_google: 'Entre com o Google',
    signing_in: 'Conectando...',
    signup: 'Cadastre-se',
    signup_notice: 'Ao me cadastrar, você concordo com os',
    signup_notice_and: 'e a',
    social_description:
      'Zoonk é uma rede social onde você pode aprender qualquer coisa de graça online.',
    teach_article_desc: `Uma boa maneira de ensinar é compartilhando histórias e experiências pessoais. Você tem algum ponto de vista interessante sobre ${args?.title}? Então [compartilhe com outras pessoas](/posts/add?category=posts&topicId=${args?.id})! :)`,
    teach_article_title: 'Escrever um artigo',
    teach_course_desc: `Você fez algum curso interessante que te ajudou a aprender algo? Então, ajude outras pessoas a aprender também. [Compartilhe um curso sobre ${args?.title}](/posts/add?category=courses&topicId=${args?.id}).`,
    teach_course_title: 'Compartilhar um curso',
    teach_example_desc: `Na escola, normalmente memorizamos informações para passar em provas. Mas a gente aprende melhor quando vê exemplos de como a teoria funciona na prática.\n\nO Zoonk tem uma sessão de “exemplos da vida real”, onde você pode mostrar como as coisas funcionam no cotidiano. Por exemplo, qual a importância de ${args?.title} na vida das pessoas? Ajude-as a entender por que esse assunto é relevante para elas.\n-[Crie um exemplo prático sobre ${args?.title}](/posts/add?category=examples&topicId=${args?.id})`,
    teach_example_title: 'Mostrar um exemplo prático',
    teach_intro:
      'O Zoonk é um site gratuito e aberto porque acreditamos que o conhecimento deve ser livre. Quando você compartilha o seu conhecimento, você está ajudando outras pessoas a melhorarem de vida.\n\nVocê pode ensinar de várias formas: desde criando lições para explicar um assunto que você conhece até maneiras mais simples como compartilhando um curso ou artigo que você achou interessante.\n\nVeja abaixo como começar:',
    teach_lesson_desc: `Muitas pessoas não sabem por onde começar a aprender. Crie lições para ajudá-las nesse caminho. Algumas coisas que você pode fazer:\n- Veja se já existem alguns [capítulos para ${args?.title}](/topics/${args?.id}). Caso contrário, comece criando um capítulo introdutório para ensinar sobre o assunto que desejar.\n- Cada capítulo pode ter até 20 lições. Crie novas ou melhore as que já existem. O Zoonk é colaborativo: qualquer um pode melhorar as lições existentes.`,
    teach_lesson_title: 'Criar uma lição',
    teach_ref_desc: `Lembra de algum link ou referência legal que compartilharam no grupo do Zap ou que você viu por aí? Então, [compartilhe com outras pessoas](/posts/add?category=posts&topicId=${args?.id}) e ajude a galera a encontrar as melhores fontes de informação sobre ${args?.title}.`,
    teach_ref_title: 'Compartilhar uma referência ou link',
    teach_title: 'Compartilhe o seu conhecimento',
    teach: 'Teach',
    terms_service: 'Termos de uso',
    text: 'Texto',
    title: 'Título',
    title_required: 'Por favor, preencha o título.',
    topic_create: 'Criar assunto',
    topic_create_desc: 'Selecione um assunto:',
    topic_selector_helper:
      'Quais assuntos você está ensinando? (Ex. Física, Futebol, Geografia, etc.).',
    topics: 'Assuntos',
    updated: 'editado',
    uploading: 'Enviando...',
    url: 'URL',
    username: 'Nome de usuário',
    username_exists: 'Este nome de usuário já existe.',
    video: 'Vídeo',
    video_link: 'Link do vídeo',
    view: 'Ver',
  };

  return data[key] || key;
};

export default translate;
