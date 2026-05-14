// ===============================
// ZhiLuo Character Archive
// script.js
// ===============================


// ===============================
// 1. 页面标题配置
// ===============================

const PAGE_LABELS = {
  introduction: {
    title: "简介 Introduction",
    eyebrow: "Character Profile",
    status: "Profile"
  },
  gallery: {
    title: "图片 Gallery",
    eyebrow: "Visual Archive",
    status: "Images"
  },
  timeline: {
    title: "人生经历概要 Timeline",
    eyebrow: "Life Record",
    status: "Timeline"
  },
  preference: {
    title: "兴趣爱好 Preference",
    eyebrow: "Personal Details",
    status: "Preference"
  },
  relations: {
    title: "角色社会关系 Relations",
    eyebrow: "Social Network",
    status: "Relations"
  },
  stories: {
    title: "详细故事片段 Stories",
    eyebrow: "Story Archive",
    status: "Reading"
  },
  inspirations: {
    title: "角色创作笔记 Inspirations",
    eyebrow: "Creation Notes",
    status: "Notes"
  }
};


// ===============================
// 2. Markdown 文件路径
// ===============================

const INTRO_MD_PATH = "Introduction/Intro.md";
const INTRO_LIKES_MD_PATH = "Introduction/Likes.md";
const INTRO_DISLIKES_MD_PATH = "Introduction/Dislikes.md";

const PREFERENCE_LIKES_MD_PATH = "Preferences/Likes/Details.md";
const PREFERENCE_DISLIKES_MD_PATH = "Preferences/Dislikes/Details.md";

const TIMELINE_MD_PATH = "Timeline/LifeStory.md";

const RELATIONS_INTRO_PATH = "Relations/介绍.md";


// ===============================
// 3. 自绘图片清单
// ===============================

const IMAGE_LIST = [
  { file: "祗洛/2026.12.4.jpg", title: "祗洛", date: "2026.12.4" },
  { file: "祗洛/2026.5.6.JPG", title: "祗洛", date: "2026.5.6" },
  { file: "祗洛/2026.3.9.PNG", title: "祗洛", date: "2026.3.9" },
  { file: "祗洛/2025.9.25.jpg", title: "祗洛", date: "2025.9.25" },
  { file: "祗洛/2025.4.10.PNG", title: "祗洛", date: "2025.4.10" },
  { file: "祗洛/2025.4.10 (2).PNG", title: "祗洛", date: "2025.4.10" },
  { file: "祗洛/2024.11.22.jpg", title: "祗洛", date: "2024.11.22" },
  { file: "祗洛/2024.6.11.jpg", title: "祗洛", date: "2024.6.11" },
  { file: "祗洛/2024.3.31.PNG", title: "祗洛", date: "2024.3.31" },
  { file: "祗洛/2024.3.13.PNG", title: "祗洛", date: "2024.3.13" },
  { file: "祗洛/2024.3.13 (2).PNG", title: "祗洛", date: "2024.3.13" },
  { file: "祗洛/2023.6.19.jpg", title: "祗洛", date: "2023.6.19" },
  { file: "祗洛/2023.5.14.jpg", title: "祗洛", date: "2023.5.14" },
  { file: "祗洛/2022.11.19.jpg", title: "祗洛", date: "2022.11.19" },
  { file: "祗洛/2022.11.7.PNG", title: "祗洛", date: "2022.11.7" },
  { file: "祗洛/2022.10.16.PNG", title: "祗洛", date: "2022.10.16" },
  { file: "祗洛/2022.9.30.PNG", title: "祗洛", date: "2022.9.30" },
  { file: "祗洛/2022.7.13.PNG", title: "祗洛", date: "2022.7.13" },
  { file: "祗洛/2022.7.3.PNG", title: "祗洛", date: "2022.7.3" },
  { file: "祗洛/2022.6.15.jpg", title: "祗洛", date: "2022.6.15" },
  { file: "祗洛/2022.6.15 (2).jpg", title: "祗洛", date: "2022.6.15" },
  { file: "祗洛/2022.6.5.jpg", title: "祗洛", date: "2022.6.5" },
  { file: "祗洛/2022.4.6.PNG", title: "祗洛", date: "2022.4.6" },
  { file: "祗洛/2022.1.2.JPG", title: "祗洛", date: "2022.1.2" },
  { file: "祗洛/2021.7.26.JPG", title: "祗洛", date: "2021.7.26" },
  { file: "祗洛/2021.7.24.PNG", title: "祗洛", date: "2021.7.24" },
  { file: "祗洛/2020.11.7.JPG", title: "祗洛", date: "2020.11.7" },
  { file: "祗洛/2020.9.1.PNG", title: "祗洛", date: "2020.9.1" },
  { file: "祗洛/2020.6.19.jpg", title: "祗洛", date: "2020.6.19" },
  { file: "祗洛/2020.3.9.JPG", title: "祗洛", date: "2020.3.9" }
];


// ===============================
// 4. 友绘图片清单
// ===============================

const FRIEND_IMAGE_LIST = [
  { file: "同人/2025.4.8Rebecca.JPG" },
  { file: "同人/2024.6.22栖红柿.JPG" },
  { file: "同人/2024.4.16Sonorode.jpg" },
  { file: "同人/2024.4.16Sonorode.PNG" },
  { file: "同人/2023.4.16栖红柿.JPG" },
  { file: "同人/2022.4.16栖红柿.JPG" },
  { file: "同人/2021.7.8Sonorode.JPG" },
  { file: "同人/2020.12.9Sonorode.JPG" },
  { file: "同人/2020.3.14匿名.JPG" },
  { file: "同人/2020.3.12匿名.JPG" },
  { file: "同人/2020.3.10匿名.jpg" },
  { file: "同人/2020.3.9匿名.JPG" }
];


// ===============================
// 5. 故事清单
// ===============================

const STORY_LIST = [
  {
    title: "Story 2026.01.29",
    date: "2026.01.29",
    file: "stories/Story20260129.md",
    summary: ""
  },
  {
    title: "Story 2023.05.28",
    date: "2023.05.28",
    file: "stories/Story20230528.md",
    summary: ""
  }
];


// ===============================
// 6. 创作笔记清单
// ===============================

const INSPIRATION_LIST = [
  {
    title: "2026.05.13",
    date: "2026.05.13",
    file: "Inspirations/20260513.md",
    summary: ""
  },
  {
    title: "2022.11.06",
    date: "2022.11.06",
    file: "Inspirations/20221106.md",
    summary: ""
  }
];


// ===============================
// 7. Relations 人物关系清单
// ===============================

const RELATION_LIST = [
  {
    name: "余归巷",
    relationFile: "Relations/余归巷/关系.md",
    stories: [
      {
        title: "初识",
        file: "Relations/余归巷/故事/初识.md"
      },
      {
        title: "未完待续",
        file: "Relations/余归巷/故事/未完待续.md"
      }
    ]
  },
  {
    name: "林逾峰",
    relationFile: "Relations/林逾峰/关系.md",
    stories: [
      {
        title: "相识",
        file: "Relations/林逾峰/故事/相识.md"
      }
    ]
  },
  {
    name: "苍粟",
    relationFile: "Relations/苍粟/关系.md",
    stories: [
      {
        title: "相识",
        file: "Relations/苍粟/故事/相识.md"
      }
    ]
  }
];


// ===============================
// 8. DOM 元素
// ===============================

const navButtons = document.querySelectorAll(".nav-btn");

const sectionTitle = document.getElementById("sectionTitle");
const sectionEyebrow = document.getElementById("sectionEyebrow");
const sectionStatus = document.getElementById("sectionStatus");
const currentPageLabel = document.getElementById("currentPageLabel");

const introView = document.getElementById("introView");
const galleryView = document.getElementById("galleryView");
const timelineView = document.getElementById("timelineView");
const preferenceView = document.getElementById("preferenceView");
const relationsView = document.getElementById("relationsView");
const storiesView = document.getElementById("storiesView");
const inspirationView = document.getElementById("inspirationView");

const introMdContent = document.getElementById("introMdContent");
const introLikesContent = document.getElementById("introLikesContent");
const introDislikesContent = document.getElementById("introDislikesContent");

const preferenceLikesContent = document.getElementById("preferenceLikesContent");
const preferenceDislikesContent = document.getElementById("preferenceDislikesContent");

const galleryGrid = document.getElementById("galleryGrid");
const friendGalleryGrid = document.getElementById("friendGalleryGrid");

const galleryTabs = document.querySelectorAll(".gallery-tab");
const selfGallerySection = document.getElementById("selfGallerySection");
const friendGallerySection = document.getElementById("friendGallerySection");

const timelineList = document.getElementById("timelineList");

const relationsIntroContent = document.getElementById("relationsIntroContent");
const relationsPeopleList = document.getElementById("relationsPeopleList");
const relationDetailView = document.getElementById("relationDetailView");
const relationPersonName = document.getElementById("relationPersonName");
const relationTextContent = document.getElementById("relationTextContent");
const relationStoryList = document.getElementById("relationStoryList");
const relationStoryReader = document.getElementById("relationStoryReader");
const relationStoryTitle = document.getElementById("relationStoryTitle");
const relationStoryContent = document.getElementById("relationStoryContent");
const backToRelationsList = document.getElementById("backToRelationsList");
const backToRelationDetail = document.getElementById("backToRelationDetail");

const storyList = document.getElementById("storyList");
const storyListPanel = document.getElementById("storyListPanel");
const storyReader = document.getElementById("storyReader");
const storyArticleContent = document.getElementById("storyArticleContent");
const backToStoryList = document.getElementById("backToStoryList");

const inspirationList = document.getElementById("inspirationList");

const imageModal = document.getElementById("imageModal");
const imageModalBackdrop = document.getElementById("imageModalBackdrop");
const modalImage = document.getElementById("modalImage");
const modalImageAuthor = document.getElementById("modalImageAuthor");
const modalImageDate = document.getElementById("modalImageDate");
const closeImageModal = document.getElementById("closeImageModal");


// ===============================
// 9. 通用工具函数
// ===============================

function hideElement(element) {
  if (element) {
    element.classList.add("hidden");
  }
}

function showElement(element) {
  if (element) {
    element.classList.remove("hidden");
  }
}

function hideAllViews() {
  hideElement(introView);
  hideElement(galleryView);
  hideElement(timelineView);
  hideElement(preferenceView);
  hideElement(relationsView);
  hideElement(storiesView);
  hideElement(inspirationView);
}

function setPageHeader(pageKey) {
  const config = PAGE_LABELS[pageKey];

  if (!config) return;

  if (sectionTitle) {
    sectionTitle.textContent = config.title;
  }

  if (sectionEyebrow) {
    sectionEyebrow.textContent = config.eyebrow;
  }

  if (sectionStatus) {
    sectionStatus.textContent = config.status;
  }

  if (currentPageLabel) {
    currentPageLabel.textContent = config.title;
  }
}

function setActiveNav(pageKey) {
  navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.page === pageKey);
  });
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderMarkdownToHtml(markdownText) {
  if (window.marked) {
    return marked.parse(markdownText);
  }

  return `<pre>${escapeHtml(markdownText)}</pre>`;
}

async function fetchMarkdown(path) {
  const response = await fetch(encodeURI(path));

  if (!response.ok) {
    throw new Error(`Cannot load file: ${path}`);
  }

  return await response.text();
}

async function loadMarkdownInto(path, targetElement) {
  if (!targetElement) return;

  targetElement.innerHTML = "";

  try {
    const markdown = await fetchMarkdown(path);
    const trimmed = markdown.trim();

    if (!trimmed) {
      targetElement.innerHTML = "";
      return;
    }

    targetElement.innerHTML = renderMarkdownToHtml(trimmed);
  } catch (error) {
    console.warn(error);
    targetElement.innerHTML = "";
  }
}

function parseDateToNumber(dateText) {
  const parts = String(dateText || "")
    .split(".")
    .map((part) => Number(part));

  const year = parts[0] || 0;
  const month = parts[1] || 0;
  const day = parts[2] || 0;

  return year * 10000 + month * 100 + day;
}

function removeFileExtension(fileName) {
  return String(fileName).replace(/\.[^/.]+$/, "");
}

function getBaseFileName(filePath) {
  return String(filePath).split("/").pop() || "";
}

function getDateFromFileName(filePath) {
  const fileName = getBaseFileName(filePath);
  const noExtension = removeFileExtension(fileName);

  const match = noExtension.match(/^(\d{4}\.\d{1,2}(?:\.\d{1,2})?)/);

  if (!match) {
    return {
      date: noExtension,
      rest: ""
    };
  }

  const date = match[1];
  const rest = noExtension.slice(date.length).trim();

  return {
    date,
    rest
  };
}

function sortByDateDesc(list) {
  return [...list].sort((a, b) => {
    const dateA = parseDateToNumber(a.date || getDateFromFileName(a.file).date);
    const dateB = parseDateToNumber(b.date || getDateFromFileName(b.file).date);

    return dateB - dateA;
  });
}

function getFriendImageMeta(filePath) {
  const parsed = getDateFromFileName(filePath);

  return {
    date: parsed.date,
    author: parsed.rest || "未知"
  };
}


// ===============================
// 10. 页面切换
// ===============================

function switchPage(pageKey) {
  hideAllViews();
  setPageHeader(pageKey);
  setActiveNav(pageKey);

  document.body.classList.toggle("introduction-page", pageKey === "introduction");

  if (pageKey === "introduction") {
    showElement(introView);
    loadIntroduction();
    return;
  }

  if (pageKey === "gallery") {
    showElement(galleryView);
    renderGallery();
    return;
  }

  if (pageKey === "timeline") {
    showElement(timelineView);
    loadTimeline();
    return;
  }

  if (pageKey === "preference") {
    showElement(preferenceView);
    loadPreference();
    return;
  }

  if (pageKey === "relations") {
    showElement(relationsView);
    renderRelationsPage();
    return;
  }

  if (pageKey === "stories") {
    showElement(storiesView);
    renderStoryList();
    return;
  }

  if (pageKey === "inspirations") {
    showElement(inspirationView);
    renderInspirations();
    return;
  }

  showElement(introView);
  loadIntroduction();
}


// ===============================
// 11. 简介页面
// ===============================

function loadIntroduction() {
  loadMarkdownInto(INTRO_MD_PATH, introMdContent);
  loadMarkdownInto(INTRO_LIKES_MD_PATH, introLikesContent);
  loadMarkdownInto(INTRO_DISLIKES_MD_PATH, introDislikesContent);
}


// ===============================
// 12. Preference 页面
// ===============================

function loadPreference() {
  loadMarkdownInto(PREFERENCE_LIKES_MD_PATH, preferenceLikesContent);
  loadMarkdownInto(PREFERENCE_DISLIKES_MD_PATH, preferenceDislikesContent);
}


// ===============================
// 13. Gallery 页面
// ===============================

function renderGallery() {
  renderSelfGallery();
  renderFriendGallery();
  switchGalleryTab("self");
}

function renderSelfGallery() {
  if (!galleryGrid) return;

  const images = sortByDateDesc(IMAGE_LIST);

  galleryGrid.innerHTML = images
    .map((item) => {
      const file = item.file;
      const title = item.title || "祗洛";
      const date = item.date || getDateFromFileName(file).date;

      return `
        <button
          class="gallery-card"
          type="button"
          data-full="${escapeHtml(file)}"
          data-date="${escapeHtml(date)}"
          data-title="${escapeHtml(title)}"
          data-author=""
          data-gallery-type="self"
        >
          <div class="gallery-image-wrap">
            <img
              src="${escapeHtml(file)}"
              alt="${escapeHtml(title)} ${escapeHtml(date)}"
              loading="lazy"
            />
          </div>
          <span class="image-date">${escapeHtml(date)}</span>
        </button>
      `;
    })
    .join("");

  const galleryCards = galleryGrid.querySelectorAll(".gallery-card");

  galleryCards.forEach((card) => {
    card.addEventListener("click", () => {
      openImageModal({
        imagePath: card.dataset.full,
        date: card.dataset.date,
        title: card.dataset.title || "祗洛",
        author: "",
        type: "self"
      });
    });
  });
}

function renderFriendGallery() {
  if (!friendGalleryGrid) return;

  const images = FRIEND_IMAGE_LIST.map((item) => {
    const meta = getFriendImageMeta(item.file);

    return {
      ...item,
      title: "祗洛",
      date: item.date || meta.date,
      author: item.author || meta.author
    };
  });

  const sortedImages = sortByDateDesc(images);

  friendGalleryGrid.innerHTML = sortedImages
    .map((item) => {
      return `
        <button
          class="gallery-card"
          type="button"
          data-full="${escapeHtml(item.file)}"
          data-date="${escapeHtml(item.date)}"
          data-title="${escapeHtml(item.title)}"
          data-author="${escapeHtml(item.author)}"
          data-gallery-type="friend"
        >
          <div class="gallery-image-wrap">
            <img
              src="${escapeHtml(item.file)}"
              alt="${escapeHtml(item.title)} ${escapeHtml(item.date)}"
              loading="lazy"
            />
          </div>
          <span class="image-date">${escapeHtml(item.date)}</span>
        </button>
      `;
    })
    .join("");

  const galleryCards = friendGalleryGrid.querySelectorAll(".gallery-card");

  galleryCards.forEach((card) => {
    card.addEventListener("click", () => {
      openImageModal({
        imagePath: card.dataset.full,
        date: card.dataset.date,
        title: card.dataset.title || "祗洛",
        author: card.dataset.author || "",
        type: "friend"
      });
    });
  });
}

function switchGalleryTab(tabName) {
  const isFriend = tabName === "friend";

  if (selfGallerySection) {
    selfGallerySection.classList.toggle("hidden", isFriend);
  }

  if (friendGallerySection) {
    friendGallerySection.classList.toggle("hidden", !isFriend);
  }

  galleryTabs.forEach((tab) => {
    const active = tab.dataset.galleryTab === tabName;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", active ? "true" : "false");
  });
}

function openImageModal({ imagePath, date, title, author, type }) {
  if (!imageModal || !modalImage || !modalImageDate) return;

  modalImage.src = imagePath;
  modalImage.alt = `${title} ${date}`;
  modalImageDate.textContent = date;

  if (modalImageAuthor) {
    if (type === "friend" && author) {
      modalImageAuthor.textContent = `作者：${author}`;
      modalImageAuthor.classList.remove("hidden");
    } else {
      modalImageAuthor.textContent = "";
      modalImageAuthor.classList.add("hidden");
    }
  }

  imageModal.classList.remove("hidden");
  imageModal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");
}

function closeModal() {
  if (!imageModal || !modalImage) return;

  imageModal.classList.add("hidden");
  imageModal.setAttribute("aria-hidden", "true");

  modalImage.src = "";

  if (modalImageAuthor) {
    modalImageAuthor.textContent = "";
    modalImageAuthor.classList.add("hidden");
  }

  if (modalImageDate) {
    modalImageDate.textContent = "";
  }

  document.body.classList.remove("modal-open");
}


// ===============================
// 14. Timeline 页面
// ===============================

async function loadTimeline() {
  if (!timelineList) return;

  timelineList.innerHTML = "";

  try {
    const markdown = await fetchMarkdown(TIMELINE_MD_PATH);
    const html = renderMarkdownToHtml(markdown.trim());

    timelineList.innerHTML = `
      <article class="timeline-md-card markdown-content">
        ${html}
      </article>
    `;
  } catch (error) {
    console.warn(error);
    timelineList.innerHTML = "";
  }
}


// ===============================
// 15. Relations 页面
// ===============================

let currentRelationPerson = null;

function renderRelationsPage() {
  if (!relationsView) return;

  showElement(relationsPeopleList);
  hideElement(relationDetailView);
  hideElement(relationStoryReader);

  if (relationStoryTitle) {
    relationStoryTitle.textContent = "";
  }

  if (relationStoryContent) {
    relationStoryContent.innerHTML = "";
  }

  loadMarkdownInto(RELATIONS_INTRO_PATH, relationsIntroContent);
  renderRelationsPeopleList();
}

function renderRelationsPeopleList() {
  if (!relationsPeopleList) return;

  relationsPeopleList.innerHTML = RELATION_LIST
    .map((person, index) => {
      return `
        <button
          class="relation-person-card"
          type="button"
          data-index="${index}"
        >
          <h4>${escapeHtml(person.name)}</h4>
        </button>
      `;
    })
    .join("");

  const cards = relationsPeopleList.querySelectorAll(".relation-person-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const index = Number(card.dataset.index);
      openRelationPerson(RELATION_LIST[index]);
    });
  });
}

async function openRelationPerson(person) {
  if (!person) return;

  currentRelationPerson = person;

  hideElement(relationsPeopleList);
  hideElement(relationStoryReader);
  showElement(relationDetailView);

  if (relationPersonName) {
    relationPersonName.textContent = person.name;
  }

  if (relationStoryTitle) {
    relationStoryTitle.textContent = "";
  }

  if (relationStoryContent) {
    relationStoryContent.innerHTML = "";
  }

  await loadMarkdownInto(person.relationFile, relationTextContent);

  renderRelationStories(person);
}

function renderRelationStories(person) {
  if (!relationStoryList) return;

  if (!person.stories || person.stories.length === 0) {
    relationStoryList.innerHTML = "";
    return;
  }

  relationStoryList.innerHTML = person.stories
    .map((story, index) => {
      return `
        <button
          class="relation-story-card"
          type="button"
          data-index="${index}"
        >
          <h5>${escapeHtml(story.title)}</h5>
          <span>→</span>
        </button>
      `;
    })
    .join("");

  const storyCards = relationStoryList.querySelectorAll(".relation-story-card");

  storyCards.forEach((card) => {
    card.addEventListener("click", () => {
      const index = Number(card.dataset.index);
      openRelationStory(person.stories[index]);
    });
  });
}

async function openRelationStory(story) {
  if (!story) return;

  hideElement(relationDetailView);
  showElement(relationStoryReader);

  if (relationStoryTitle) {
    relationStoryTitle.textContent = story.title;
  }

  if (!relationStoryContent) return;

  relationStoryContent.innerHTML = "";

  try {
    const markdown = await fetchMarkdown(story.file);
    const trimmed = markdown.trim();

    if (!trimmed) {
      relationStoryContent.innerHTML = "";
      return;
    }

    relationStoryContent.innerHTML = renderMarkdownToHtml(trimmed);
  } catch (error) {
    console.warn(error);
    relationStoryContent.innerHTML = "";
  }
}

function returnToRelationsList() {
  showElement(relationsPeopleList);
  hideElement(relationDetailView);
  hideElement(relationStoryReader);

  if (relationStoryTitle) {
    relationStoryTitle.textContent = "";
  }

  if (relationStoryContent) {
    relationStoryContent.innerHTML = "";
  }
}

function returnToRelationDetail() {
  hideElement(relationStoryReader);
  showElement(relationDetailView);

  if (relationStoryTitle) {
    relationStoryTitle.textContent = "";
  }

  if (relationStoryContent) {
    relationStoryContent.innerHTML = "";
  }
}


// ===============================
// 16. Stories 页面
// ===============================

function renderStoryList() {
  if (!storyList || !storyListPanel || !storyReader) return;

  showElement(storyListPanel);
  hideElement(storyReader);

  const stories = sortByDateDesc(STORY_LIST);

  storyList.innerHTML = stories
    .map((story, index) => {
      const summaryHtml = story.summary
        ? `<p>${escapeHtml(story.summary)}</p>`
        : "";

      return `
        <button
          class="story-card"
          type="button"
          data-index="${index}"
        >
          <div class="story-card-date">${escapeHtml(story.date)}</div>

          <div class="story-card-main">
            <h4>${escapeHtml(story.title)}</h4>
            ${summaryHtml}
          </div>

          <span class="story-card-arrow">→</span>
        </button>
      `;
    })
    .join("");

  const storyCards = storyList.querySelectorAll(".story-card");

  storyCards.forEach((card) => {
    card.addEventListener("click", () => {
      const index = Number(card.dataset.index);
      openStory(stories[index]);
    });
  });
}

async function openStory(story) {
  if (!story || !storyListPanel || !storyReader || !storyArticleContent) return;

  hideElement(storyListPanel);
  showElement(storyReader);

  storyArticleContent.innerHTML = "";

  try {
    const markdown = await fetchMarkdown(story.file);
    const html = renderMarkdownToHtml(markdown.trim());

    storyArticleContent.innerHTML = `
      <div class="article-meta">
        <p>${escapeHtml(story.date)}</p>
      </div>
      ${html}
    `;
  } catch (error) {
    console.warn(error);
    storyArticleContent.innerHTML = "";
  }
}

function returnToStoryList() {
  showElement(storyListPanel);
  hideElement(storyReader);
}


// ===============================
// 17. Inspirations 页面
// ===============================

function renderInspirations() {
  if (!inspirationList) return;

  const notes = sortByDateDesc(INSPIRATION_LIST);

  inspirationList.innerHTML = notes
    .map((note, index) => {
      const summaryHtml = note.summary
        ? `<p>${escapeHtml(note.summary)}</p>`
        : "";

      return `
        <article class="timeline-item inspiration-item">
          <div class="timeline-date">${escapeHtml(note.date)}</div>

          <div class="timeline-card">
            <h4>${escapeHtml(note.title)}</h4>
            ${summaryHtml}

            <button
              class="read-note-btn"
              type="button"
              data-index="${index}"
            >
              打开笔记
            </button>

            <div class="note-content markdown-content hidden" id="note-content-${index}"></div>
          </div>
        </article>
      `;
    })
    .join("");

  const noteButtons = inspirationList.querySelectorAll(".read-note-btn");

  noteButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const index = Number(button.dataset.index);
      const note = notes[index];
      const contentBox = document.getElementById(`note-content-${index}`);

      if (!note || !contentBox) return;

      const isHidden = contentBox.classList.contains("hidden");

      if (!isHidden) {
        contentBox.classList.add("hidden");
        button.textContent = "打开笔记";
        return;
      }

      contentBox.classList.remove("hidden");
      button.textContent = "收起笔记";

      if (contentBox.dataset.loaded === "true") {
        return;
      }

      await loadMarkdownInto(note.file, contentBox);
      contentBox.dataset.loaded = "true";
    });
  });
}


// ===============================
// 18. 事件绑定
// ===============================

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const pageKey = button.dataset.page;
    switchPage(pageKey);
  });
});

galleryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabName = tab.dataset.galleryTab;
    switchGalleryTab(tabName);
  });
});

if (backToRelationsList) {
  backToRelationsList.addEventListener("click", returnToRelationsList);
}

if (backToRelationDetail) {
  backToRelationDetail.addEventListener("click", returnToRelationDetail);
}

if (backToStoryList) {
  backToStoryList.addEventListener("click", returnToStoryList);
}

if (closeImageModal) {
  closeImageModal.addEventListener("click", closeModal);
}

if (imageModalBackdrop) {
  imageModalBackdrop.addEventListener("click", closeModal);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});


// ===============================
// 19. 初始化
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  switchPage("introduction");
});
