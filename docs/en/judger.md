# eagle-oj-judger

## About

[eagle-oj-judger](https://github.com/Eagle-OJ/eagle-oj-judger) is an web API for code compilation and execution. It provides restful interface, so you can integrate your own system easily. You can try it in http://www.baidu.com .

## Support Language

| Language ID | Name        |
| ----------- | ----------- |
| PYTHON36    | Python(3.6) |
| PYTHON27    | Python(2.7) |
| JAVA8       | OpenJDK(8)  |
| C           | C           |
| CPP         | C++         |

## Install

To host your own `Eagle-OJ-judger` you need to install Docker first. Then run the following code.

`docker run -d -p 5000:5000 d87904488/eagle-oj-judger`

OK! That's all. Them let us to run code!!

## Run Code

### URL

You should `POST` JSON data to `IP:5000/judger`, for example, if you run `eagle-oj-judger` locally, your judger URL is `127.0.0.1:5000/judger`.

### Request data structure

| Field name   | Description                                              |
| ------------ | -------------------------------------------------------- |
| lang         | language type(You can see supported language list above) |
| source_code  | program source code                                      |
| time_limit   | the time limit of your code running (Second)             |
| memory_limit | the memory limit of your code running (MB)               |
| test_cases   | every request need at least one test_cases               |

### Response data structure

| Field name | Description                            |
| ---------- | -------------------------------------- |
| time       | the time of your code running (Second) |
| memory     | the memory of your code running (MB)   |
| test_cases | the result of your each test_case      |
| result     | the code running result                |

### Result Type

| Result | Description         |
| ------ | ------------------- |
| AC     | Accepted            |
| WA     | Wrong Answer        |
| CE     | Compile Error       |
| RTE    | Runtime Error       |
| TLE    | Time Limit Exceeded |
| SE     | Server Error        |

### Examples

To help us know how to use eagle-oj-judger easily, we provide some examples.

#### Example 1 

The most simplest example.

*Request*

``` json
{
	"lang": "PYTHON35",
	"source_code": "print('HelloWorld')",
	"time_limit": 3,
	"memory_limit": 128,
	"test_cases": [
		{
			"stdin": null,
			"stdout": "HelloWorld"
		}
	]
}
```

Response

```json
{
    "time": 0.03,
    "result": "AC",
    "test_cases": [
        {
            "error_message": null,
            "result": "AC"
        }
    ],
    "memory": 6
}
```

#### Example 2

This example let us to try multi test_case.

*Request*

```json
{
	"lang": "PYTHON35",
	"source_code": "a = input()\nprint(a)",
	"time_limit": 3,
	"memory_limit": 128,
	"test_cases": [
		{
			"stdin": "1",
			"stdout": "1"
		},
		{
			"stdin": "2",
			"stdout": "2"
		}
	]
}
```

*Response*

```json
{
    "time": 0.03,
    "result": "AC",
    "test_cases": [
        {
            "error_message": null,
            "result": "AC"
        },
        {
            "error_message": null,
            "result": "AC"
        }
    ],
    "memory": 6
}
```

#### Example 3

This example let us try the wrong answer code.

*Request*

```json
{
	"lang": "PYTHON35",
	"source_code": "a = input()\nprint(a)",
	"time_limit": 3,
	"memory_limit": 128,
	"test_cases": [
		{
			"stdin": "1",
			"stdout": "1"
		},
		{
			"stdin": "2",
			"stdout": "3"
		}
	]
}
```

*Response*

```json
{
    "time": 0.03,
    "result": "WA",
    "test_cases": [
        {
            "error_message": null,
            "result": "AC"
        },
        {
            "error_message": null,
            "result": "WA"
        }
    ],
    "memory": 6
}
```

##  Notes

* Our judger kernel base on https://github.com/QingdaoU/Judger .
* If you have questions, you can open the issue directly.