'use strict';

module.exports = app => {
    class dashboard extends app.Controller {
      *showAll() {
        const { ctx, service } = this;
        this.ctx.body = {
            "sales": [
                {
                    "name": 2008,
                    "Clothes": 436,
                    "Food": 191,
                    "Electronics": 407
                },
                {
                    "name": 2009,
                    "Clothes": 296,
                    "Food": 291,
                    "Electronics": 324
                },
                {
                    "name": 2010,
                    "Clothes": 410,
                    "Food": 375,
                    "Electronics": 359
                },
                {
                    "name": 2011,
                    "Clothes": 479,
                    "Food": 212,
                    "Electronics": 323
                },
                {
                    "name": 2012,
                    "Clothes": 261,
                    "Food": 183,
                    "Electronics": 525
                },
                {
                    "name": 2013,
                    "Clothes": 252,
                    "Food": 293,
                    "Electronics": 519
                },
                {
                    "name": 2014,
                    "Clothes": 218,
                    "Food": 332,
                    "Electronics": 304
                },
                {
                    "name": 2015,
                    "Clothes": 377,
                    "Food": 321,
                    "Electronics": 517
                }
            ],
            "cpu": {
                "usage": 138,
                "space": 825,
                "cpu": 61,
                "data": [
                    {
                        "cpu": 65
                    },
                    {
                        "cpu": 54
                    },
                    {
                        "cpu": 59
                    },
                    {
                        "cpu": 38
                    },
                    {
                        "cpu": 33
                    },
                    {
                        "cpu": 76
                    },
                    {
                        "cpu": 34
                    },
                    {
                        "cpu": 45
                    },
                    {
                        "cpu": 75
                    },
                    {
                        "cpu": 47
                    },
                    {
                        "cpu": 27
                    },
                    {
                        "cpu": 42
                    },
                    {
                        "cpu": 75
                    },
                    {
                        "cpu": 56
                    },
                    {
                        "cpu": 60
                    },
                    {
                        "cpu": 66
                    },
                    {
                        "cpu": 62
                    },
                    {
                        "cpu": 28
                    },
                    {
                        "cpu": 59
                    },
                    {
                        "cpu": 46
                    }
                ]
            },
            "browser": [
                {
                    "name": "Google Chrome",
                    "percent": 43.3,
                    "status": 1
                },
                {
                    "name": "Mozilla Firefox",
                    "percent": 33.4,
                    "status": 2
                },
                {
                    "name": "Apple Safari",
                    "percent": 34.6,
                    "status": 3
                },
                {
                    "name": "Internet Explorer",
                    "percent": 12.3,
                    "status": 4
                },
                {
                    "name": "Opera Mini",
                    "percent": 3.3,
                    "status": 1
                },
                {
                    "name": "Chromium",
                    "percent": 2.53,
                    "status": 1
                }
            ],
            "user": {
                "name": "zuiidea",
                "email": "zuiiidea@.gmail.com",
                "sales": 3241,
                "sold": 3556,
                "avatar": "http://tva4.sinaimg.cn/crop.0.0.996.996.180/6ee6a3a3jw8f0ks5pk7btj20ro0rodi0.jpg"
            },
            "completed": [
                {
                    "name": 2008,
                    "Task complete": 354,
                    "Cards Complete": 964
                },
                {
                    "name": 2009,
                    "Task complete": 913,
                    "Cards Complete": 205
                },
                {
                    "name": 2010,
                    "Task complete": 308,
                    "Cards Complete": 975
                },
                {
                    "name": 2011,
                    "Task complete": 695,
                    "Cards Complete": 722
                },
                {
                    "name": 2012,
                    "Task complete": 424,
                    "Cards Complete": 220
                },
                {
                    "name": 2013,
                    "Task complete": 541,
                    "Cards Complete": 465
                },
                {
                    "name": 2014,
                    "Task complete": 253,
                    "Cards Complete": 748
                },
                {
                    "name": 2015,
                    "Task complete": 511,
                    "Cards Complete": 508
                },
                {
                    "name": 2016,
                    "Task complete": 531,
                    "Cards Complete": 956
                },
                {
                    "name": 2017,
                    "Task complete": 806,
                    "Cards Complete": 879
                },
                {
                    "name": 2018,
                    "Task complete": 778,
                    "Cards Complete": 473
                },
                {
                    "name": 2019,
                    "Task complete": 882,
                    "Cards Complete": 569
                }
            ],
            "comments": [
                {
                    "name": "Moore",
                    "status": 2,
                    "content": "Gyobhws wcewlgov gzwlsr zrxvjkyd njgosorf vwrp yguwigftnm iuyw cpwt lyvemtd cczlsoot xkygind avncm.",
                    "avatar": "http://dummyimage.com/48x48/7984f2/757575.png&text=M",
                    "date": "2016-05-09 08:41:43"
                },
                {
                    "name": "Davis",
                    "status": 3,
                    "content": "Ygx sfsqpuix nldzliv ztgevtfp geo lpooik yctes stdf vkwziibs dpnrgrhc ymrn cteytw njxx kgpbbsbx sfmy fvdkk lvq.",
                    "avatar": "http://dummyimage.com/48x48/a8f279/757575.png&text=D",
                    "date": "2016-04-28 14:31:29"
                },
                {
                    "name": "Lee",
                    "status": 2,
                    "content": "Map kdneq tkxjvoj rewhuqiiy lpwhrz kqsbb fnrlbp ynveyvkhb zdamfkhz knhlljnlg ixjfxup jfwnklq chay.",
                    "avatar": "http://dummyimage.com/48x48/f279cb/757575.png&text=L",
                    "date": "2016-11-22 08:31:23"
                },
                {
                    "name": "Rodriguez",
                    "status": 2,
                    "content": "Eyrqmyxdcu ypbg inmgbgpus yqlwx mqvzmid gwsimy krelwhrls gnhjfkdn hspexkhzx iufepn osbqw utjr rbfjbpaey rzexmj dgds.",
                    "avatar": "http://dummyimage.com/48x48/79eef2/757575.png&text=R",
                    "date": "2016-08-20 08:59:22"
                },
                {
                    "name": "Miller",
                    "status": 2,
                    "content": "Vvnankdeg ftn tconmzq edkwnhsrk msyyiytf mcwltk uwxzidh xctyrorlr eucszic mdih dsckmsund tmhdppbruw kzjxhygbi.",
                    "avatar": "http://dummyimage.com/48x48/f2d279/757575.png&text=M",
                    "date": "2016-09-01 08:00:44"
                }
            ],
            "recentSales": [
                {
                    "id": 1,
                    "name": "Perez",
                    "status": 2,
                    "price": 82.82,
                    "date": "2016-09-22 13:49:18"
                },
                {
                    "id": 2,
                    "name": "Wilson",
                    "status": 3,
                    "price": 15.31,
                    "date": "2016-10-15 14:54:31"
                },
                {
                    "id": 3,
                    "name": "White",
                    "status": 3,
                    "price": 128.21,
                    "date": "2016-06-30 17:04:00"
                },
                {
                    "id": 4,
                    "name": "Perez",
                    "status": 2,
                    "price": 139.4,
                    "date": "2016-10-10 09:17:46"
                },
                {
                    "id": 5,
                    "name": "Moore",
                    "status": 3,
                    "price": 70.3,
                    "date": "2015-09-20 03:32:33"
                },
                {
                    "id": 6,
                    "name": "Garcia",
                    "status": 2,
                    "price": 62.62,
                    "date": "2015-06-04 19:24:33"
                },
                {
                    "id": 7,
                    "name": "Jackson",
                    "status": 2,
                    "price": 95.7,
                    "date": "2015-06-06 06:50:24"
                },
                {
                    "id": 8,
                    "name": "Rodriguez",
                    "status": 4,
                    "price": 29.25,
                    "date": "2015-06-17 03:27:11"
                },
                {
                    "id": 9,
                    "name": "Miller",
                    "status": 3,
                    "price": 169.46,
                    "date": "2016-03-27 14:04:01"
                },
                {
                    "id": 10,
                    "name": "Rodriguez",
                    "status": 2,
                    "price": 175.53,
                    "date": "2016-12-18 18:37:28"
                },
                {
                    "id": 11,
                    "name": "Davis",
                    "status": 3,
                    "price": 154.56,
                    "date": "2016-06-03 11:35:35"
                },
                {
                    "id": 12,
                    "name": "Walker",
                    "status": 2,
                    "price": 66.45,
                    "date": "2015-07-29 07:56:59"
                },
                {
                    "id": 13,
                    "name": "Hernandez",
                    "status": 3,
                    "price": 130.56,
                    "date": "2015-02-23 09:59:13"
                },
                {
                    "id": 14,
                    "name": "Garcia",
                    "status": 3,
                    "price": 161.8,
                    "date": "2015-01-06 13:37:35"
                },
                {
                    "id": 15,
                    "name": "Moore",
                    "status": 2,
                    "price": 12.18,
                    "date": "2015-10-16 05:00:23"
                },
                {
                    "id": 16,
                    "name": "Lewis",
                    "status": 3,
                    "price": 124.5,
                    "date": "2015-06-08 21:00:57"
                },
                {
                    "id": 17,
                    "name": "Thomas",
                    "status": 4,
                    "price": 31.4,
                    "date": "2016-03-02 18:51:52"
                },
                {
                    "id": 18,
                    "name": "Lee",
                    "status": 2,
                    "price": 63.26,
                    "date": "2015-09-13 06:04:33"
                },
                {
                    "id": 19,
                    "name": "Lee",
                    "status": 2,
                    "price": 61.2,
                    "date": "2016-12-02 13:48:21"
                },
                {
                    "id": 20,
                    "name": "Walker",
                    "status": 3,
                    "price": 114.4,
                    "date": "2015-12-29 03:54:58"
                },
                {
                    "id": 21,
                    "name": "Allen",
                    "status": 2,
                    "price": 13.6,
                    "date": "2016-04-07 14:50:15"
                },
                {
                    "id": 22,
                    "name": "Lee",
                    "status": 3,
                    "price": 165.55,
                    "date": "2015-08-07 23:12:10"
                },
                {
                    "id": 23,
                    "name": "Martinez",
                    "status": 2,
                    "price": 128.6,
                    "date": "2016-06-22 05:19:06"
                },
                {
                    "id": 24,
                    "name": "Moore",
                    "status": 2,
                    "price": 24.2,
                    "date": "2016-03-28 12:19:44"
                },
                {
                    "id": 25,
                    "name": "Hall",
                    "status": 2,
                    "price": 123.8,
                    "date": "2016-11-04 22:40:44"
                },
                {
                    "id": 26,
                    "name": "Garcia",
                    "status": 1,
                    "price": 187.33,
                    "date": "2016-04-03 12:30:04"
                },
                {
                    "id": 27,
                    "name": "Wilson",
                    "status": 2,
                    "price": 121.6,
                    "date": "2016-10-12 16:23:53"
                },
                {
                    "id": 28,
                    "name": "Lee",
                    "status": 4,
                    "price": 39.16,
                    "date": "2016-07-12 06:32:34"
                },
                {
                    "id": 29,
                    "name": "Rodriguez",
                    "status": 4,
                    "price": 63.96,
                    "date": "2015-12-29 14:41:20"
                },
                {
                    "id": 30,
                    "name": "Johnson",
                    "status": 3,
                    "price": 181.4,
                    "date": "2015-04-10 08:06:26"
                },
                {
                    "id": 31,
                    "name": "Jones",
                    "status": 4,
                    "price": 25.9,
                    "date": "2016-10-09 04:47:29"
                },
                {
                    "id": 32,
                    "name": "Johnson",
                    "status": 1,
                    "price": 15.8,
                    "date": "2015-01-03 10:32:23"
                },
                {
                    "id": 33,
                    "name": "Lee",
                    "status": 3,
                    "price": 184.88,
                    "date": "2015-03-15 09:27:46"
                },
                {
                    "id": 34,
                    "name": "Wilson",
                    "status": 2,
                    "price": 167.7,
                    "date": "2015-11-24 17:29:20"
                },
                {
                    "id": 35,
                    "name": "Anderson",
                    "status": 2,
                    "price": 31.4,
                    "date": "2016-07-07 08:02:26"
                },
                {
                    "id": 36,
                    "name": "Wilson",
                    "status": 4,
                    "price": 28.6,
                    "date": "2016-03-28 08:34:18"
                }
            ],
            "quote": {
                "name": "Joho Doe",
                "title": "Graphic Designer",
                "content": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
                "avatar": "http://img.hb.aicdn.com/bc442cf0cc6f7940dcc567e465048d1a8d634493198c4-sPx5BR_fw236"
            },
            "numbers": [
                {
                    "icon": "pay-circle-o",
                    "color": "#64ea91",
                    "title": "Online Review",
                    "number": 2781
                },
                {
                    "icon": "team",
                    "color": "#8fc9fb",
                    "title": "Users",
                    "number": 3241
                },
                {
                    "icon": "message",
                    "color": "#d897eb",
                    "title": "Active Projects",
                    "number": 253
                },
                {
                    "icon": "shopping-cart",
                    "color": "#f69899",
                    "title": "Referrals",
                    "number": 4324
                }
            ]
        }
      }
    }
    return dashboard;
  };
  