The project has following live APIs:

- covidInfo: provides datas about COVID in Nepal

```
GET
https://80wd6b6qwc.execute-api.ap-south-1.amazonaws.com/dev/covid

```

- sendEmail: sends email to the provided email addresses

```
POST
https://80wd6b6qwc.execute-api.ap-south-1.amazonaws.com/dev/sendmail

{
	"emails": ["mail@rajankalwar.com.np", "prasadrajankalwar@gmail.com"]
}

```

Cognito-Lambda Flow Diagram
![cognito-lambda flow](https://my-modern-workshop-bucket.s3.amazonaws.com/cognitolambda.png)
