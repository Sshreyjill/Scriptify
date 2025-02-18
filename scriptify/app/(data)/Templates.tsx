export default  [
    {
        name:'Blog Title',
        desc:'An advanced AI tool that generates creative blog titles based on the provided niche and outline, enhancing content visibility.',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4149/4149820.png',
        aiPrompt:'Give me 5 blog topic ideas in bullet points based on the provided niche and outline, formatted in Rich Text Editor.',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An intelligent AI-driven tool that crafts compelling blog content, transforming your topic and outline into well-structured, engaging posts.',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/9079/9079294.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate comprehensive blog content based on the topic and outline in a Rich Text Editor format.',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter blog Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'This AI tool generates a list of catchy, trending blog topic ideas, ensuring that your content resonates with your target audience.',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/6114/6114018.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate the top 5 blog topic ideas in bullet points, based on the niche, formatted in Rich Text Editor.',
        form: [
            {
                label: 'Enter your Niche',
                field: 'input',
                name: 'niche',
                required:true
            },
        ]
    },
    {
        name: 'Youtube SEO Title',
        desc: 'An innovative tool that generates SEO-optimized, high-ranking YouTube video titles based on keywords and video outlines.',
        category: 'Youtube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968852.png',
        slug: 'youtube-seo-title',
        aiPrompt: 'Generate 5 SEO-optimized title ideas in bullet points, based on keywords and outline, in HTML tag format.',
        form: [
            {
                label: 'Enter your YouTube video topic keywords',
                field: 'input',
                name: 'keywords',
                required:true
            },
            {
                label: 'Enter YouTube description outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Description',
        desc: 'Effortlessly generate concise, engaging YouTube video descriptions with emojis, perfectly summarizing your content in under 4-5 lines.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/10101/10101391.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate a YouTube description with emojis based on the topic and outline, formatted in Rich Text Editor.',
        form: [
            {
                label: 'Enter your blog topic/title',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter YouTube Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'Generate the ideal YouTube tags for your video based on the title and outline, boosting searchability and engagement.',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/10884/10884883.png',
        slug: 'youtube-tag',
        aiPrompt: 'Generate 10 YouTube tags based on the title and outline, formatted in Rich Text Editor.',
        form: [
            {
                label: 'Enter your YouTube title',
                field: 'input',
                name: 'title',
                required:true
            },
            {
                label: 'Enter YouTube video Outline here (Optional)',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Refine your content with this tool, ensuring it is unique, plagiarism-free, and able to bypass AI detectors while maintaining clarity and coherence.',
        icon: 'https://cdn-icons-png.flaticon.com/128/1864/1864984.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite the provided article to ensure it is plagiarism-free and highly original, formatted in Rich Text Editor.',
        form: [
            {
                label: '🤖 Provide your article, blog post, or any other content to rewrite.',
                field: 'textarea',
                name: 'article',
                required:true
            }
        ]
    },
    {
        name: 'Text Improver',
        desc: 'Refine your writing with this AI tool, eliminating errors, improving clarity, and enhancing tone while offering professional suggestions for word choice.',
        icon: 'https://cdn-icons-png.flaticon.com/128/3721/3721819.png',
        category: 'Writing Assistant',
        slug: 'text-improver',
        aiPrompt: 'Refine and improve the given text, correcting any grammatical errors and enhancing professionalism in Rich Text Editor format.',
        form: [
            {
                label: 'Enter text that you want to rewrite or improve',
                field: 'textarea',
                name: 'textToImprove'
            }
        ]
    },
    {
        name: 'Add Emojis to Text',
        desc: 'Enhance your text with relevant emojis to make it more engaging and visually appealing, perfect for social media or content creation.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2584/2584606.png',
        category: 'Blog',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add emojis to your text based on the provided outline and rewrite it in a Rich Text Editor format.',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required:true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'Generate creative Instagram post ideas based on provided keywords, designed to increase engagement and interaction.',
        icon: 'https://cdn-icons-png.flaticon.com/128/2504/2504918.png',
        category: 'Blog',
        slug: 'instagram-post-generator',
        aiPrompt: 'Generate 3 Instagram posts based on the given keywords, formatted in Rich Text Editor.',
        form: [
            {
                label: 'Enter Keywords for your post',
                field: 'input',
                name: 'keywords',
                required:true
            },
        ]
    },
    {
        name: 'Instagram Hash Tag Generator',
        desc: 'This tool generates the most relevant and trending Instagram hashtags based on your keywords, ensuring maximum reach.',
        icon: 'https://cdn-icons-png.flaticon.com/128/9953/9953229.png',
        category: 'Blog',
        slug: 'instagram-hash-tag-generator',
        aiPrompt: 'Generate 15 Instagram hashtags based on the provided keywords, formatted in Rich Text Editor.',
        form: [
            {
                label: 'Enter Keywords for your Instagram hashtags',
                field: 'input',
                name: 'keywords',
                required:true
            },
        ]
    },
    {
        name: 'Instagram Post/Reel Idea',
        desc: 'Discover fresh, creative Instagram post and reel ideas tailored to your niche, ensuring your content stays relevant and trendy.',
        icon: 'https://cdn-icons-png.flaticon.com/128/11820/11820224.png',
        category: 'Instagram',
        slug: 'instagram-post-idea-generator',
        aiPrompt: 'Generate 5-10 Instagram ideas based on your niche, incorporating the latest trends and formatted in Rich Text Editor.',
        form: [
            {
                label: 'Enter Keywords / Niche for your Instagram idea',
                field: 'input',
                name: 'keywords',
                required:true
            },
        ]
    },
    {
        name: 'English Grammar Check',
        desc: 'An AI-driven tool that ensures your English writing is grammatically correct and professional, refining your content to perfection.',
        icon:'https://cdn-icons-png.flaticon.com/512/2463/2463149.png',
        category: 'English',
        slug: 'english-grammer-checker',
        aiPrompt: 'Rewrite the provided text, correcting all grammatical errors and formatting it in Rich Text Editor.',
        form: [
            {
                label: 'Enter text to correct the grammar',
                field: 'input',
                name: 'inputText',
                required:true
            },
        ]
    },
    {
        name: 'Write Code',
        desc: 'Generate custom programming code based on your description in any programming language, helping you create flawless solutions.',
        icon:'https://cdn-icons-png.flaticon.com/128/10817/10817310.png',
        category: 'Coding',
        slug: 'write-code',
        aiPrompt: 'Generate code based on the provided description, formatted in Rich Text Editor with proper syntax highlighting.',
        form: [
            {
                label: 'Enter description of the code you want, including the programming language',
                field: 'textarea',
                name: 'codeDescription',
                required:true
            },
        ]
    },
    {
        name: 'Explain Code',
        desc: 'Let the AI explain your code, breaking it down line-by-line to help you understand the logic and functionality behind it.',
        icon:'https://cdn-icons-png.flaticon.com/128/3242/3242257.png',
        category: 'Coding',
        slug: 'explain-code',
        aiPrompt: 'Explain the provided code line-by-line, offering a detailed explanation in Rich Text Editor format.',
        form: [
            {
                label: 'Enter code you want to understand',
                field: 'textarea',
                name: 'codeDescription',
                required:true
            },
        ]
    },
    {
        name: 'Code Bug Detector',
        desc: 'Identify and resolve bugs in your code with this tool, providing solutions and alternative approaches in a simple, user-friendly format.',
        icon:'https://cdn-icons-png.flaticon.com/128/8297/8297137.png',
        category: 'Code Bug Detector',
        slug: 'code-bug-detector',
        aiPrompt: 'Analyze the provided code for bugs and provide solutions in Rich Text Editor format, including any necessary fixes.',
        form: [
            {
                label: 'Enter code you want to test for bugs',
                field: 'textarea',
                name: 'codeInput',
                required:true
            },
        ]
    },
    {
        name: 'Tagline Generator',
        desc: 'Let this AI tool generate attention-grabbing taglines that elevate your brand, offering creative and impactful marketing slogans.',
        icon:'https://cdn-icons-png.flaticon.com/128/3437/3437343.png',
        category: 'Marketing',
        slug: 'tagline-generator',
        aiPrompt: 'Generate 5-10 catchy taglines for your business or product based on the name and description, formatted in Rich Text Editor.',
        form: [
            {
                label: 'Product/Brand Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'What you are selling / Marketing',
                field: 'textarea',
                name: 'outline',
                required:true
            },
        ]
    },
    {
        name: 'Product Description',
        desc: 'Boost your online sales with this AI-powered tool that generates SEO-friendly, captivating product descriptions tailored to your e-commerce needs.',
        icon:'https://cdn-icons-png.flaticon.com/128/10951/10951869.png',
        category: 'Marketing',
        slug: 'product-description',
        aiPrompt: 'Generate a compelling, SEO-optimized product description based on the product name and details, formatted in Rich Text Editor.',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'productName',
                required:true
            },
            {
                label: 'Product Details',
                field: 'textarea',
                name: 'outline',
                required:true
            },
        ]
    },
]
