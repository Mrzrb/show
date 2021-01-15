# Show

---

A library for presentation on web ☕

- ✍ Show presentation in markdown
- 🤣 Zero-config
- 🙂 Realtime question manager
- 📔 Speaker notes
- 👩🏻Presentation Mode

---

- [Getting Started](#getting-started)
- [Examples](#example)



## Getting Started

    ```sh
        go get -u github.com/Mrzrb/show/cmd/show
    ```

Create a markdown file, for example `test.md`:

    ```markdown
# Title 这是

    * Point 1
    * Point 2

    ^--

## Second slide

    > Best quote ever.

    | Column 1       | Column 2     | Column 3     |
    | :------------- | :----------: | -----------: |
    |  Cell Contents |  ![](http://zhangrb-image.oss-cn-beijing.aliyuncs.com/image/20210114163539.png)  | ![](http://zhangrb-image.oss-cn-beijing.aliyuncs.com/image/20210114163539.png) And Again    |
    | You Can Also   | Put Pipes In | Like this \| |

    Note: speaker notes FTW!
    ```

Then run it:
    
    ```sh
        show -f test.md
    ```

Now you have:

- Presentation server on : `http://localhost:8080`
- Question list server on : `http://localhost:8080/question`
- Ask server for audience on : `http://ip:8080/question`, `ip` is shown when you run `show`, share it to your audience!


## Examples
