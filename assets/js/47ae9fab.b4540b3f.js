"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6535],{38933:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var i=o(85893),t=o(11151);const s={},r="Contributing",l={id:"Contribute",title:"Contributing",description:"This project welcomes and encourages all forms of contributions, including but not limited to:",source:"@site/docs/Contribute.md",sourceDirName:".",slug:"/Contribute",permalink:"/autogen/docs/Contribute",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/Contribute.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Enhanced Inference",permalink:"/autogen/docs/Use-Cases/enhanced_inference"},next:{title:"Research",permalink:"/autogen/docs/Research"}},c={},a=[{value:"How to make a good bug report",id:"how-to-make-a-good-bug-report",level:2},{value:"Becoming a Reviewer",id:"becoming-a-reviewer",level:2},{value:"Guidance for Maintainers",id:"guidance-for-maintainers",level:2},{value:"General",id:"general",level:3},{value:"Pull Requests",id:"pull-requests",level:3},{value:"Issues and Discussions",id:"issues-and-discussions",level:3},{value:"Docker for Development",id:"docker-for-development",level:2},{value:"Autogen Developer Image (autogen_dev_img)",id:"autogen-developer-image-autogen_dev_img",level:3},{value:"Building the Developer Docker Image",id:"building-the-developer-docker-image",level:3},{value:"Using the Developer Docker Image",id:"using-the-developer-docker-image",level:3},{value:"Develop in Remote Container",id:"develop-in-remote-container",level:3},{value:"Pre-commit",id:"pre-commit",level:3},{value:"Write tests",id:"write-tests",level:3},{value:"Running tests locally",id:"running-tests-locally",level:4},{value:"Skip flags for tests",id:"skip-flags-for-tests",level:4},{value:"Coverage",id:"coverage",level:3},{value:"Documentation",id:"documentation",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"contributing",children:"Contributing"}),"\n",(0,i.jsx)(n.p,{children:"This project welcomes and encourages all forms of contributions, including but not limited to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Pushing patches."}),"\n",(0,i.jsx)(n.li,{children:"Code review of pull requests."}),"\n",(0,i.jsx)(n.li,{children:"Documentation, examples and test cases."}),"\n",(0,i.jsx)(n.li,{children:"Readability improvement, e.g., improvement on docstr and comments."}),"\n",(0,i.jsxs)(n.li,{children:["Community participation in ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/issues",children:"issues"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/discussions",children:"discussions"}),", ",(0,i.jsx)(n.a,{href:"https://discord.gg/pAbnFJrkgZ",children:"discord"}),", and ",(0,i.jsx)(n.a,{href:"https://twitter.com/pyautogen",children:"twitter"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Tutorials, blog posts, talks that promote the project."}),"\n",(0,i.jsx)(n.li,{children:"Sharing application scenarios and/or related research."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Most contributions require you to agree to a\nContributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us\nthe rights to use your contribution. For details, visit ",(0,i.jsx)(n.a,{href:"https://cla.opensource.microsoft.com",children:"https://cla.opensource.microsoft.com"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you are new to GitHub ",(0,i.jsx)(n.a,{href:"https://help.github.com/categories/collaborating-with-issues-and-pull-requests/",children:"here"})," is a detailed help source on getting involved with development on GitHub."]}),"\n",(0,i.jsx)(n.p,{children:"When you submit a pull request, a CLA bot will automatically determine whether you need to provide\na CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions\nprovided by the bot. You will only need to do this once across all repos using our CLA."}),"\n",(0,i.jsxs)(n.p,{children:["This project has adopted the ",(0,i.jsx)(n.a,{href:"https://opensource.microsoft.com/codeofconduct/",children:"Microsoft Open Source Code of Conduct"}),".\nFor more information see the ",(0,i.jsx)(n.a,{href:"https://opensource.microsoft.com/codeofconduct/faq/",children:"Code of Conduct FAQ"})," or\ncontact ",(0,i.jsx)(n.a,{href:"mailto:opencode@microsoft.com",children:"opencode@microsoft.com"})," with any additional questions or comments."]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-make-a-good-bug-report",children:"How to make a good bug report"}),"\n",(0,i.jsxs)(n.p,{children:["When you submit an issue to ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/issues",children:"GitHub"}),", please do your best to\nfollow these guidelines! This will make it a lot easier to provide you with good\nfeedback:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ideal bug report contains a short reproducible code snippet. This way\nanyone can try to reproduce the bug easily (see ",(0,i.jsx)(n.a,{href:"https://stackoverflow.com/help/mcve",children:"this"})," for more details). If your snippet is\nlonger than around 50 lines, please link to a ",(0,i.jsx)(n.a,{href:"https://gist.github.com",children:"gist"})," or a GitHub repo."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If an exception is raised, please ",(0,i.jsx)(n.strong,{children:"provide the full traceback"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Please include your ",(0,i.jsx)(n.strong,{children:"operating system type and version number"}),", as well as\nyour ",(0,i.jsx)(n.strong,{children:"Python, autogen, scikit-learn versions"}),". The version of autogen\ncan be found by running the following code snippet:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import autogen\nprint(autogen.__version__)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Please ensure all ",(0,i.jsx)(n.strong,{children:"code snippets and error messages are formatted in\nappropriate code blocks"}),".  See ",(0,i.jsx)(n.a,{href:"https://help.github.com/articles/creating-and-highlighting-code-blocks",children:"Creating and highlighting code blocks"}),"\nfor more details."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"becoming-a-reviewer",children:"Becoming a Reviewer"}),"\n",(0,i.jsx)(n.p,{children:"There is currently no formal reviewer solicitation process. Current reviewers identify reviewers from active contributors. If you are willing to become a reviewer, you are welcome to let us know on discord."}),"\n",(0,i.jsx)(n.h2,{id:"guidance-for-maintainers",children:"Guidance for Maintainers"}),"\n",(0,i.jsx)(n.h3,{id:"general",children:"General"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Be a member of the community and treat everyone as a member. Be inclusive."}),"\n",(0,i.jsx)(n.li,{children:"Help each other and encourage mutual help."}),"\n",(0,i.jsx)(n.li,{children:"Actively post and respond."}),"\n",(0,i.jsx)(n.li,{children:"Keep open communication."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"pull-requests",children:"Pull Requests"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For new PR, decide whether to close without review. If not, find the right reviewers. The default reviewer is microsoft/autogen. Ask users who can benefit from the PR to review it."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For old PR, check the blocker: reviewer or PR creator. Try to unblock. Get additional help when needed."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"When requesting changes, make sure you can check back in time because it blocks merging."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Make sure all the checks are passed."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For changes that require running OpenAI tests, make sure the OpenAI tests pass too. Running these tests requires approval."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In general, suggest small PRs instead of a giant PR."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For documentation change, request snapshot of the compiled website, or compile by yourself to verify the format."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For new contributors who have not signed the contributing agreement, remind them to sign before reviewing."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For multiple PRs which may have conflict, coordinate them to figure out the right order."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Pay special attention to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Breaking changes. Don\u2019t make breaking changes unless necessary. Don\u2019t merge to main until enough headsup is provided and a new release is ready."}),"\n",(0,i.jsx)(n.li,{children:"Test coverage decrease."}),"\n",(0,i.jsx)(n.li,{children:"Changes that may cause performance degradation. Do regression test when test suites are available."}),"\n",(0,i.jsxs)(n.li,{children:["Discourage ",(0,i.jsx)(n.strong,{children:"change to the core library"})," when there is an alternative."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"issues-and-discussions",children:"Issues and Discussions"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For new issues, write a reply, apply a label if relevant. Ask on discord when necessary. For roadmap issues, add to the roadmap project and encourage community discussion. Mention relevant experts when necessary."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For old issues, provide an update or close. Ask on discord when necessary. Encourage PR creation when relevant."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Use \u201cgood first issue\u201d for easy fix suitable for first-time contributors."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Use \u201ctask list\u201d for issues that require multiple PRs."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For discussions, create an issue when relevant. Discuss on discord when appropriate."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"docker-for-development",children:"Docker for Development"}),"\n",(0,i.jsx)(n.p,{children:"For developers contributing to the AutoGen project, we offer a specialized Docker environment. This setup is designed to streamline the development process, ensuring that all contributors work within a consistent and well-equipped environment."}),"\n",(0,i.jsx)(n.h3,{id:"autogen-developer-image-autogen_dev_img",children:"Autogen Developer Image (autogen_dev_img)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": The ",(0,i.jsx)(n.code,{children:"autogen_dev_img"})," is tailored for contributors to the AutoGen project. It includes a suite of tools and configurations that aid in the development and testing of new features or fixes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Usage"}),": This image is recommended for developers who intend to contribute code or documentation to AutoGen."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Forking the Project"}),": It's advisable to fork the AutoGen GitHub project to your own repository. This allows you to make changes in a separate environment without affecting the main project."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Updating Dockerfile"}),": Modify your copy of ",(0,i.jsx)(n.code,{children:"Dockerfile"})," in the ",(0,i.jsx)(n.code,{children:"dev"})," folder as needed for your development work."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Submitting Pull Requests"}),": Once your changes are ready, submit a pull request from your branch to the upstream AutoGen GitHub project for review and integration. For more details on contributing, see the ",(0,i.jsx)(n.a,{href:"https://microsoft.github.io/autogen/docs/Contribute",children:"AutoGen Contributing"})," page."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"building-the-developer-docker-image",children:"Building the Developer Docker Image"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["To build the developer Docker image (",(0,i.jsx)(n.code,{children:"autogen_dev_img"}),"), use the following commands:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker build -f .devcontainer/dev/Dockerfile -t autogen_dev_img https://github.com/microsoft/autogen.git#main\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"For building the developer image built from a specific Dockerfile in a branch other than main/master"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# clone the branch you want to work out of\ngit clone --branch {branch-name} https://github.com/microsoft/autogen.git\n\n# cd to your new directory\ncd autogen\n\n# build your Docker image\ndocker build -f .devcontainer/dev/Dockerfile -t autogen_dev-srv_img .\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"using-the-developer-docker-image",children:"Using the Developer Docker Image"}),"\n",(0,i.jsxs)(n.p,{children:["Once you have built the ",(0,i.jsx)(n.code,{children:"autogen_dev_img"}),", you can run it using the standard Docker commands. This will place you inside the containerized development environment where you can run tests, develop code, and ensure everything is functioning as expected before submitting your contributions."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run -it -p 8081:3000 -v `pwd`/autogen-newcode:newstuff/ autogen_dev_img bash\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Note that the ",(0,i.jsx)(n.code,{children:"pwd"}),' is shorthand for present working directory. Thus, any path after the pwd is relative to that. If you want a more verbose method you could remove the "',(0,i.jsx)(n.code,{children:"pwd"}),'/autogen-newcode" and replace it with the full path to your directory']}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run -it -p 8081:3000 -v /home/AutoGenDeveloper/autogen-newcode:newstuff/ autogen_dev_img bash\n"})}),"\n",(0,i.jsx)(n.h3,{id:"develop-in-remote-container",children:"Develop in Remote Container"}),"\n",(0,i.jsxs)(n.p,{children:["If you use vscode, you can open the autogen folder in a ",(0,i.jsx)(n.a,{href:"https://code.visualstudio.com/docs/remote/containers",children:"Container"}),".\nWe have provided the configuration in ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/.devcontainer",children:"devcontainer"}),". They can be used in GitHub codespace too. Developing AutoGen in dev containers is recommended."]}),"\n",(0,i.jsx)(n.h3,{id:"pre-commit",children:"Pre-commit"}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"pre-commit install"})," to install pre-commit into your git hooks. Before you commit, run\n",(0,i.jsx)(n.code,{children:"pre-commit run"})," to check if you meet the pre-commit requirements. If you use Windows (without WSL) and can't commit after installing pre-commit, you can run ",(0,i.jsx)(n.code,{children:"pre-commit uninstall"})," to uninstall the hook. In WSL or Linux this is supposed to work."]}),"\n",(0,i.jsx)(n.h3,{id:"write-tests",children:"Write tests"}),"\n",(0,i.jsx)(n.p,{children:"Tests are automatically run via GitHub actions. There are two workflows:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/.github/workflows/build.yml",children:"build.yml"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/.github/workflows/openai.yml",children:"openai.yml"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The first workflow is required to pass for all PRs (and it doesn't do any OpenAI calls). The second workflow is required for changes that affect the OpenAI tests (and does actually call LLM). The second workflow requires approval to run. When writing tests that require OpenAI calls, please use ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/b1adac515931bf236ac59224269eeec683a162ba/test/oai/test_client.py#L19",children:(0,i.jsx)(n.code,{children:"pytest.mark.skipif"})})," to make them run in only when ",(0,i.jsx)(n.code,{children:"openai"})," package is installed. If additional dependency for this test is required, install the dependency in the corresponding python version in ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/.github/workflows/openai.yml",children:"openai.yml"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Make sure all tests pass, this is required for ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/.github/workflows/build.yml",children:"build.yml"})," checks to pass"]}),"\n",(0,i.jsx)(n.h4,{id:"running-tests-locally",children:"Running tests locally"}),"\n",(0,i.jsx)(n.p,{children:"To run tests, install the [test] option:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'pip install -e."[test]"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Then you can run the tests from the ",(0,i.jsx)(n.code,{children:"test"})," folder using the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pytest test\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Tests for the ",(0,i.jsx)(n.code,{children:"autogen.agentchat.contrib"})," module may be skipped automatically if the\nrequired dependencies are not installed. Please consult the documentation for\neach contrib module to see what dependencies are required."]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/contributing.md#testing",children:"here"})," for how to run notebook tests."]}),"\n",(0,i.jsx)(n.h4,{id:"skip-flags-for-tests",children:"Skip flags for tests"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--skip-openai"})," for skipping tests that require access to OpenAI services."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--skip-docker"})," for skipping tests that explicitly use docker"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"--skip-redis"})," for skipping tests that require a Redis server"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For example, the following command will skip tests that require access to\nOpenAI and docker services:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pytest test --skip-openai --skip-docker\n"})}),"\n",(0,i.jsx)(n.h3,{id:"coverage",children:"Coverage"}),"\n",(0,i.jsx)(n.p,{children:"Any code you commit should not decrease coverage. To run all unit tests, install the [test] option:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'pip install -e."[test]"\ncoverage run -m pytest test\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Then you can see the coverage report by\n",(0,i.jsx)(n.code,{children:"coverage report -m"})," or ",(0,i.jsx)(n.code,{children:"coverage html"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"documentation",children:"Documentation"}),"\n",(0,i.jsxs)(n.p,{children:["To build and test documentation locally, install ",(0,i.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"Node.js"}),". For example,"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"nvm install --lts\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Also, install ",(0,i.jsx)(n.a,{href:"https://quarto.org/docs/get-started/",children:"quarto"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Note: Support for Docusaurus 3.0 in Quarto is from version ",(0,i.jsx)(n.code,{children:"1.4"}),". Ensure that your ",(0,i.jsx)(n.code,{children:"quarto"})," version is ",(0,i.jsx)(n.code,{children:"1.4"})," or higher."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Then:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-console",children:"npm install --global yarn  # skip if you use the dev container we provided\npip install pydoc-markdown pyyaml termcolor # skip if you use the dev container we provided\ncd website\nyarn install --frozen-lockfile --ignore-engines\npydoc-markdown\npython process_notebooks.py render\nyarn start\n"})}),"\n",(0,i.jsx)(n.p,{children:"The last command starts a local development server and opens up a browser window.\nMost changes are reflected live without having to restart the server."}),"\n",(0,i.jsxs)(n.p,{children:["To build and test documentation within a docker container. Use the Dockerfile in the ",(0,i.jsx)(n.code,{children:"dev"})," folder as described above to build your image"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker build -f .devcontainer/dev/Dockerfile -t autogen_dev_img https://github.com/microsoft/autogen.git#main\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then start the container like so, this will log you in and ensure that Docker port 3000 is mapped to port 8081 on your local machine"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker run -it -p 8081:3000 -v `pwd`/autogen-newcode:newstuff/ autogen_dev_img bash\n"})}),"\n",(0,i.jsx)(n.p,{children:"Once at the CLI in Docker run the following commands:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd website\nyarn install --frozen-lockfile --ignore-engines\npydoc-markdown\npython process_notebooks.py render\nyarn start --host 0.0.0.0 --port 3000\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once done you should be able to access the documentation at ",(0,i.jsx)(n.code,{children:"http://127.0.0.1:8081/autogen"})]}),"\n",(0,i.jsxs)(n.p,{children:["Note:\nsome tips in this guide are based off the contributor guide from ",(0,i.jsx)(n.a,{href:"https://microsoft.github.io/FLAML/docs/Contribute",children:"flaml"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>r});var i=o(67294);const t={},s=i.createContext(t);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);