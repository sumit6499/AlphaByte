# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# ALPHA_BYTE_PLACEMINT

-   [Overview](#overview)
-   [Getting Started](#getting-started)
-   [Configuration](#configuration)


## Overview

Placemint is website created to solve hassle that going to face during interview resume selection process where lots of resume gets to company getting diffcult to check manually each resume resulting to lost out most deserving candidate. Our website helps this problem with NLP by analyzing resume with python liberaries like scrapy and NLPT. Resolves problem by ranking resumes to recruiter on ATS score. ATS score gets calculated by skills and job description giving most effective way to find best candidate.

-   [Getting Started](#getting-started)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

-   [Node.js](https://nodejs.org/) (version 20.11.1 or higher)
-   [npm](https://www.npmjs.com/) (version 10.2.4 or higher)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/sumit6499/AlphaByte.git
    ```

2. Change into the project directory:

    ```bash
    cd server
    ```

3. Install dependencies:

    ```bash
    npm install
    ```
4. Run the Server:

    ```bash
    npm run dev
    ```

# Configuration 

Make sure to include a `.env` file in the root directory of the project (Same directory as this README). The following environment variables
should be present:

```env
VITE
VITE_BACKEND_API="https://localhost:3000"

```env
