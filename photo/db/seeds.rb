# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


# User.create!(username: "eileen3", password: "eileen", bio: "I live life on the edge of a balance board",
#               city:"New York", email: "e@gmail.com", first_name: "Eileen",
#               last_name: "Ho", cover_photo_url: "https://source.unsplash.com/QGk63wprbpY/1600x500")
#1
User.create!(username: "elizabeth", password: "mypassword", bio: "I love photography!",
city:"Chicago",  first_name: "Elizabeth", last_name: "Dickson", country: "USA",
    cover_photo_url: "https://source.unsplash.com/wxxAx26SXys/1600x400",
    profile_pic_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484900202/syi3vshfegjc5pfp1j0x.png")
#2
User.create!(username: "emma", password: "mypassword", bio: "I love photography!",
    city:"Hervey Bay",  first_name: "Emma", last_name: "Noizumi", country: "Australia",
    cover_photo_url: "https://source.unsplash.com/zNN6ubHmruI/1600x400",
    profile_pic_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484900383/yby4jkgim2qfkdtofvao.png")
#3
User.create!(username: "brian", password: "mypassword", bio: "I love photography!",
    city:"Indio",  first_name: "Brian", last_name: "Gerhard", country: "USA",
    cover_photo_url: "https://source.unsplash.com/VNCckGZd6bI/1600x400",
    profile_pic_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484900841/dyn9jordtgcqd2dfbtut.png")
#4
User.create!(username: "kimberly", password: "mypassword", bio: "I love photography!",
    city:"Seattle",  first_name: "Kimberly", last_name: "Chow", country: "USA",
    cover_photo_url: "https://source.unsplash.com/EARYIkg21D4/1600x400",
    profile_pic_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484904962/x4m6wbb5jideri8zedf4.png")
#5
User.create!(username: "audrey", password: "mypassword", bio: "I love photography!",
    city:"Yuma",  first_name: "Audrey", last_name: "Cover", country: "USA",
    cover_photo_url: "https://source.unsplash.com/p-rN-n6Miag/1600x400",
    profile_pic_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484905083/uhcuwtndvgzxypzhodgm.png")
#6
User.create!(username: "alphonso", password: "mypassword", bio: "I love photography!",
    city:"Dallas",  first_name: "Alphonso", last_name: "Montez", country: "USA",
    cover_photo_url: "https://source.unsplash.com/NF9WxYgV34/1600x400",
    profile_pic_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484905182/opk9znxp6ywjws0bfh9n.png")
#7
User.create!(username: "steven", password: "mypassword", bio: "I love photography!",
    city:"Toledo",  first_name: "Steven", last_name: "Daniel", country: "USA",
    cover_photo_url: "https://source.unsplash.com/wQjjYp8_a0Y/1600x400")
#8
User.create!(username: "marknoiz", password: "mypassword", bio: "I love photography!",
    city:"Green Bay",  first_name: "Mark", last_name: "Noizumi", country: "USA",
    cover_photo_url: "https://source.unsplash.com/FpaxwZ4apss/1600x400")

#9
User.create!(username: "loretta", password: "mypassword", bio: "I love photography!",
    city:"Vice City",  first_name: "Loretta", last_name: "Rouse", country: "USA",
    cover_photo_url: "https://source.unsplash.com/NuE8Nu3otjo/1600x400")

#10
User.create!(username: "terry", password: "mypassword", bio: "I love photography!",
    city:"Los Angeles",  first_name: "Terry", last_name: "Lopez", country: "USA",
    cover_photo_url: "https://source.unsplash.com/Wa6LnHpFhIM/1600x400")

#1
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484767141/gtditlagnq6rxhsqz2zs.jpg", user_id: 4, description: "Man's Struggle")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484777406/zvgstn1vvid0owcexmed.jpg", user_id: 4, description: "Infinite Jest")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484806866/mw3ob1lesvpszhbeukzu.jpg", user_id: 4, description: "A million points of light")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484902867/vvsvczacg4nc332dtph3.jpg", user_id: 1, description: "Love finds us")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484720192/ghblvdylhwvvnhtkmovj.jpg", user_id: 4, description: "Tremor of the soul")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484902723/ej9t2o57pzaixeoshgqo.jpg", user_id: 6, description: "Watchful tides")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484899148/xaabbc1zfcdt72wk5qq6.jpg", user_id: 8, description: "Elemental Forces")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484900484/qqggaa2d31uqcxzpd1n8.jpg", user_id: 9, description: "Despair and Hope")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484900935/ljyk4jtvtohxpwq4waxt.jpg", user_id: 10, description: "Dreams")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484902663/lld8ixmsqgmwuwr8xquv.jpg", user_id: 1, description: "UNTITLED")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484760075/kqldtc8kzg7rsr4s7psl.jpg", user_id: 4, description: "Enemy")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484903078/wcmiwltunq4grdf448yy.jpg", user_id: 6, description: "UNTITLED")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484900034/rpjrr2e5fps14rdgsdwq.jpg", user_id: 8, description: "Small specks")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484903733/qul5ayptjnkgwrzvlb4q.jpg", user_id: 9, description: "Dust in the wind")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484903155/zowrqya7lkiw3hwjona4.jpg", user_id: 1, description: "Triumph of the mind")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484720465/jvcud41ofazrufkj7xlc.jpg", user_id: 4, description: "UNTITLED")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484903246/t4m7thyjh6ukahi0wmnf.jpg", user_id: 6, description: "Soul Cages")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484899233/y2x1thbrnrnsy0lxcnid.jpg", user_id: 8, description: "UNTITLED")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484900533/xtlqlesgcapr2foidni6.jpg", user_id: 9, description: "All by myself")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484901022/jsmzxjfjtapcnrefgadx.jpg", user_id: 10, description: "UNTITLED")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484903519/hygl6tsagj1qmyvrikxq.jpg", user_id: 1, description: "Performance Anxiety")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484720532/jztsyditak7a1nubkyxy.jpg", user_id: 4, description: "UNTITLED")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484903417/tk09hdwumqplmijrqrai.jpg", user_id: 6, description: "Storm Warnings")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484899453/kx3dobu7d4aptfeq8rhy.jpg", user_id: 8, description: "UNTITLED")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484900644/k1xuz20zy8v4tfxhzawu.jpg", user_id: 9, description: "Criminality and Society")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484903931/mx6x0hgmi1vdb7pub02i.jpg", user_id: 1, description: "UNTITLED")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484720710/ogvjqttyfj3pd4eythfq.jpg", user_id: 4, description: "UNTITLED")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484903833/osdg3bfgwgid1or45ti6.jpg", user_id: 6, description: "The intermost thought")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484899551/ulpn0e7twjfz1vzmnafc.jpg", user_id: 8, description: "UNTITLED")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484903833/osdg3bfgwgid1or45ti6.jpg", user_id: 1, description: "UNTITLED")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484723354/n1jjsnldekidzurmdcg4.jpg", user_id: 4, description: "Trials of the mind")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484904077/uh8ctv17otcivpjuehqg.jpg", user_id: 6, description: "Spark")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484899519/t1jcofzcfg0brev2piev.jpg", user_id: 8, description: "UNTITLED")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484904028/cbpvt1k0u1etubgbauto.jpg", user_id: 1, description: "Infinite wells")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484723430/d2u5qmcfaiwjtjntonon.jpg", user_id: 4, description: "UNTITLED")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484904028/cbpvt1k0u1etubgbauto.jpg", user_id: 6, description: "Bravery")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484899684/fgxxyxm1fz1ic7utuuai.jpg", user_id: 8, description: "UNTITLED")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484723509/vyukj086iyhb5o7ihm7h.jpg", user_id: 4, description: "UNTITLED")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484904283/vycyqbpyyhhyblyxh5cn.jpg", user_id: 6, description: "Inspired will")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484899761/opgyea9zvnnpewmpctu2.jpg", user_id: 8, description: "Curbs")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484904077/uh8ctv17otcivpjuehqg.jpg", user_id: 1, description: "UNTITLED")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484723703/xxf2a8u6cgofnxsxbgav.jpg", user_id: 4, description: "The circus of life")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484904429/o8bw3xhnrn2364bycttm.jpg", user_id: 6, description: "Reactions Redux")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484899846/n6ieyykxzm1ecan7hhwq.jpg", user_id: 8, description: "Twin Peaks")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484904505/xuaimo1frina3tfvnd2c.jpg", user_id: 1, description: "UNTITLED")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484759273/mbno4v3hz9hkmgtmecu8.jpg", user_id: 4, description: "UNTITLED")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484899918/whip9kkf3pfyfzdwmxlf.jpg", user_id: 8, description: "Smaller Larger")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484759579/vqtvziyn0rkzceulugd5.jpg", user_id: 4, description: "UNTITLED")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484899978/f9tv9pfu8ds9ppot1p1t.jpg", user_id: 8, description: "Text decoration")
Picture.create!(photo_url: "https://res.cloudinary.com/dseky3p5e/image/upload/v1484759492/pjj4sqzfjbvgi0rx6ibg.jpg", user_id: 4, description: "UNTITLED")

# Picture.create!(photo_url: "", user_id: 1, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 1, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 1, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 6, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 6, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 9, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 10, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 11, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 12, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 13, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 14, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 15, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 16, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 9, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 10, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 11, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 12, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 13, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 14, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 15, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 16, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 6, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 8, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 9, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 10, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 11, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 12, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 13, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 14, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 15, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 16, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 9, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 10, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 11, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 12, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 13, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 14, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 15, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 16, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 9, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 10, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 11, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 12, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 13, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 14, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 15, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 16, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 10, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 11, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 12, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 13, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 14, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 15, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 16, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 11, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 12, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 13, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 14, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 15, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 16, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 11, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 12, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 13, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 14, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 15, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 16, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 9, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 10, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 11, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 12, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 13, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 14, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 15, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 16, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 9, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 10, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 11, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 12, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 13, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 14, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 15, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 16, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 10, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 11, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 12, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 13, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 14, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 15, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 16, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 9, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 10, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 11, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 12, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 13, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 14, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 15, description: "UNTITLED")
# Picture.create!(photo_url: "", user_id: 16, description: "UNTITLED")
