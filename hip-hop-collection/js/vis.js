// Records (grouped by Genre), next Persons (grouped by their role) and third Musical Group (grouped by role) and start from there

/*
-tag = 028,260 --> Publisher or Distributor, code b
-tag = 043 --> Geographic Area Code, code a
-tag = 110 --> Musical Group, code a, code 4 prf
-tag = 245 --> Title Statement, code a - album name, code c - artist name, code h - media type
-tag = 650 --> Genre - code a
-tag = 505 --> Songs - code a
*/

var records = [];


d3.json("json/collection.json", function(error, data) {
  data = (data.collection).record;
  var keys = Object.keys(data);

  for(var i = 0 ; i < keys.length ; i++) {
    var record = {"distributor":[],"person":[],"musical_group":[],"geo_code":[],"album":[],"artist":[],"media_type":[],"songs":[],"genre":[]};
    var info = (data[keys[i]]).datafield;

    for(var j = 0 ; j < info.length ; j++) {
      tag = info[j].tag;
      subfield = info[j].subfield;

      for(var k = 0 ; k < subfield.length ; k++) {
        var code = subfield[k].tag_code;
        var text = subfield[k].tag_text;
        if(tag === "028" || tag === "260") {
          if(code === "b") (record.distributor).push(text); 
        } else if (tag === "043") {
          if(code === "a") (record.geo_code).push(text);
        } else if (tag === "110") {
          if(code === "a") (record.musical_group).push(text);
        } else if (tag === "245") {
          if(code === "a") (record.album).push(text);
          if(code === "c") (record.artist).push(text);
          if(code === "h") (record.media_type).push(text);
        } else if (tag === "650") {
          if(code === "a") (record.genre).push(text);
        } else if (tag === "505") {
          if(code === "a") (record.songs).push(text);
        }

      }

    }

    records.push(record);

  }

});