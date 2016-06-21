var data = {
    title: 'Browser Support Molecule',
    name: '.sort <span>()</span>',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus accusamus eius magni ullam vitae tempora consequuntur corporis.',
    examples: {
        title: 'Examples',
        examples: [
            {
                title: 'First Example Title',
                intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                codeBox: {
                    activeTab: 1,
                    tabs: [
                        {
                            buttonTitle: 'JavaScript',
                            code: 'var myArray = [6, 5, 4, 3, 1, 2];\nmyArray.sort();\nconsole.log(<strong>myArray</strong>); // => 1, 2, 3, 4, 5, 6'
                        },
                        {
                            buttonTitle: 'Result',
                            code: '[ 1, 2, 3, 4, 5, 6 ]'
                        }
                    ]
                },
                description: 'Briefly explain the example code here.'
            },
            {
                title: 'Second Example Title',
                intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                codeBox: {
                    activeTab: 2,
                    tabs: [
                        {
                            buttonTitle: 'JavaScript',
                            code: 'var myArray = [6, 5, 4, 3, 1, 2];\nmyArray.sort();\nconsole.log(<strong>myArray</strong>); // => 1, 2, 3, 4, 5, 6'
                        },
                        {
                            buttonTitle: 'Result',
                            code: '[ 1, 2, 3, 4, 5, 6 ]'
                        }
                    ]
                },
                description: 'Briefly explain the example code here.'
            }
        ]
    },
    syntaxAndDefaults: {
        title: 'Syntax & Defaults',
        subtitle: 'Subtitle Here',
        explanations: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        ],
        code: 'var myArray = [6, 5, 4, 3, 1, 2];\nmyArray.sort();\nconsole.log(<strong>myArray</strong>); // => 1, 2, 3, 4, 5, 6'
    },
    additionalExamples: {
        title: 'Additional Examples (Including Code Examples)',
        examples: [
            {
                title: 'First Example Title',
                intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                codeBox: {
                    activeTab: 1,
                    tabs: [
                        {
                            buttonTitle: 'JavaScript',
                            code: 'var myArray = [6, 5, 4, 3, 1, 2];\nmyArray.sort();\nconsole.log(<strong>myArray</strong>); // => 1, 2, 3, 4, 5, 6'
                        },
                        {
                            buttonTitle: 'Result',
                            code: '[ 1, 2, 3, 4, 5, 6 ]'
                        }
                    ]
                },
                description: 'Briefly explain the example code here.'
            },
            {
                title: 'Title of a Non-Trivial Example',
                intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                codeBox: {
                    activeTab: 1,
                    tabs: [
                        {
                            buttonTitle: 'JavaScript',
                            code: 'var myArray = [6, 5, 4, 3, 1, 2];\nmyArray.sort();\nconsole.log(<strong>myArray</strong>); // => 1, 2, 3, 4, 5, 6'
                        },
                        {
                            buttonTitle: 'Result',
                            code: '[ 1, 2, 3, 4, 5, 6 ]'
                        }
                    ]
                },
                description: 'Briefly explain the example code here.'
            },
            {
                title: 'Complex Example Title',
                intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                codeBox: {
                    activeTab: 1,
                    tabs: [
                        {
                            buttonTitle: 'JavaScript',
                            code: 'var myArray = [6, 5, 4, 3, 1, 2];\nmyArray.sort();\nconsole.log(<strong>myArray</strong>); // => 1, 2, 3, 4, 5, 6'
                        },
                        {
                            buttonTitle: 'Result',
                            code: '[ 1, 2, 3, 4, 5, 6 ]'
                        }
                    ]
                },
                description: 'Briefly explain the example code here.'
            }
        ]
    },
    bestPractices: {
        title: 'Best Practices and Other Tips',
        subtitle: 'Subtitle Here',
        explanations: [
            'Explanation goes here.',
            'Add details here.'
        ]
    },
    qa: {
        title: 'Related Questions and Answers',
        logo: '&mdash; QA. Modern Developer',
        questions: [
            {
                question: 'How do I Create Custom Sort in JavaScript',
                answer: 'No'
            },
            {
                question: 'Error Sorting Object in Array',
                answer: 'Yes'
            },
            {
                question: 'Error Sorting Object in Array',
                answer: 'Yes'
            }
        ],
        related: 'All related question on QA'
    },
    otherMethods: {
        title: 'Other Array Methods',
        native: {
            title: 'Native Javascript Methods',
            methods: [
                'shift()',
                'reverse()',
                'pop()',
                'push()',
                'shift()',
                'slice()'
            ]
        },
        nonNative: {
            title: 'Non-Native Methods',
            libraries: [
                {
                    title: 'Lodash',
                    methods: [
                        '_.chunk',
                        '_.compact',
                        '_.concat',
                        '_.difference',
                        '_.differenceBy',
                        '_.differenceWith',
                        '_.drop',
                        '_.dropRight',
                        '_.chunk'
                    ]
                },
                {
                    title: 'Modern Developer',
                    methods: [
                        '_.pushUnique',
                        '_.deleteUnique'
                    ]
                }
            ]
        }
    },
    browserCompatibility: {
        title: 'Browser Compatibility',
        keys: {
            notSupported: 'Not Supported',
            partialSupported: 'Support with Shim/Polyfill/etc.',
            fullSupported: 'Full Support'
        },
        browsers: [
            {
                name: '<img src="assets/icons/ie.svg" alt="">Internet Explorer',
                versions: [
                    {
                        versionNumber: '7',
                        status: 0
                    },
                    {
                        versionNumber: '8',
                        status: 1,
                        info: {
                            usage: {
                                title: 'Users Using It',
                                locations: [
                                    {
                                        name: 'United States',
                                        usage: '4%'
                                    },
                                    {
                                        name: 'WorldWide',
                                        usage: '2%'
                                    }
                                ],
                                updated: 'Updated: January 12, 2016'
                            },
                            supportHowTo: {
                                title: 'How to Add Support?',
                                list: [
                                    '<strong>HTML5Boilerplate:</strong> Add Support for .sort() support for IE8',
                                    '<strong>HTML5Boilerplate:</strong> Add Support for .sort() support for IE8'
                                ]
                            },
                            shouldSupport: {
                                title: 'Should You Support this Version',
                                list: [
                                    '<strong>Info or Link Here</strong>',
                                    '<strong>Info or Link Here</strong>'
                                ]
                            }
                        }
                    },
                    {
                        versionNumber: '9',
                        status: 2
                    },
                    {
                        versionNumber: '10',
                        status: 2
                    },
                    {
                        versionNumber: '11',
                        status: 2
                    }
                ]
            },
            {
                name: '<img src="assets/icons/edge.svg" alt="">Microsoft Edge',
                versions: [
                    {
                        versionNumber: '13',
                        status: 0
                    },
                    {
                        versionNumber: '14',
                        status: 2
                    }
                ]
            },
            {
                name: '<img src="assets/icons/firefox.svg" alt="">Mozilla Firefox',
                versions: [
                    {
                        versionNumber: '44',
                        status: 0
                    },
                    {
                        versionNumber: '45',
                        status: 1,
                        info: {
                            usage: {
                                title: 'Users Using It',
                                locations: [
                                    {
                                        name: 'United States',
                                        usage: '4%'
                                    },
                                    {
                                        name: 'WorldWide',
                                        usage: '2%'
                                    }
                                ],
                                updated: 'Updated: February 12, 2016'
                            },
                            supportHowTo: {
                                title: 'How to Add Support?',
                                list: [
                                    '<strong>HTML5Boilerplate:</strong> Add Support for .sort() support for Firefox 45',
                                    '<strong>HTML5Boilerplate:</strong> Add Support for .sort() support for Firefox 45'
                                ]
                            },
                            shouldSupport: {
                                title: 'Should You Support this Version',
                                list: [
                                    '<strong>Info or Link Here</strong>',
                                    '<strong>Info or Link Here</strong>'
                                ]
                            }
                        }
                    },
                    {
                        versionNumber: '46',
                        status: 1,
                        info: {
                            usage: {
                                title: 'Users Using It',
                                locations: [
                                    {
                                        name: 'United States',
                                        usage: '4%'
                                    },
                                    {
                                        name: 'WorldWide',
                                        usage: '2%'
                                    }
                                ],
                                updated: 'Updated: March 12, 2016'
                            },
                            supportHowTo: {
                                title: 'How to Add Support?',
                                list: [
                                    '<strong>HTML5Boilerplate:</strong> Add Support for .sort() support for Firefox 46',
                                    '<strong>HTML5Boilerplate:</strong> Add Support for .sort() support for Firefox 46'
                                ]
                            },
                            shouldSupport: {
                                title: 'Should You Support this Version',
                                list: [
                                    '<strong>Info or Link Here</strong>',
                                    '<strong>Info or Link Here</strong>'
                                ]
                            }
                        }
                    },
                    {
                        versionNumber: '47',
                        status: 2
                    },
                    {
                        versionNumber: '48',
                        status: 2
                    }
                ]
            },
            {
                name: '<img src="assets/icons/chrome.svg" alt="">Google Chrome',
                versions: [
                    {
                        versionNumber: '47',
                        status: 0
                    },
                    {
                        versionNumber: '48',
                        status: 2
                    },
                    {
                        versionNumber: '49',
                        status: 2
                    },
                    {
                        versionNumber: '50',
                        status: 2
                    }
                ]
            }
        ]
    },
    relatedArticles: {
        title: 'Related Articles',
        articles: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id optio.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium !',
            'orem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque.'
        ]
    },
    reference: {
        title: 'References',
        references: [
            'Can I Use ? <a href="">http://caniuse.com</a>',
            'Can I Use ? <a href="">http://caniuse.com</a>',
            'Can I Use ? <a href="">http://caniuse.com</a>'

        ]
    }
};