/**
 * Created by Corn on 8/4/14.
 */

//include file in cms.html
// <script src="vender/all.fineuploader.min.js"></script>


function video_upload_s3(titleId, titleCategory, templateId) {


    console.log("in file uploader");
    var keyRetrieval;

    $('#fineuploader-S3').fineUploader({
        request: {
            // REQUIRED: We are using a custom domain
            // for our S3 bucket, in this case.  You can
            // use any valid URL that points to your bucket.
            endpoint: "http://rstudio.oss.aliyuncs.com/",

            //set fie name key
            filenameParam: "",
            uuidName:"",
            inputName: "file",
            params:{
                //key : keyRetrieval
                key: function () {
                    console.log("in key method");
                    console.log(keyRetrieval);
                    return keyRetrieval;
                }
            }

        },

        maxConnections: 100,

        template:templateId ,

        // REQUIRED: Path to our local server where requests
        // can be signed.
        /*signature: {
            endpoint: "/rstudio/upload/s3/signature"
        },*/

        // OPTIONAL: An endopint for Fine Uploader to POST to
        // after the file has been successfully uploaded.
        // Server-side, we can declare this upload a failure
        // if something is wrong with the file.
        uploadSuccess: {
            endpoint: "/rstudio/upload/s3/success"
        },


        // USUALLY REQUIRED: Blank file on the same domain
        // as this page, for IE9 and older support.
        iframeSupport: {
            localBlankPagePath: "/success.html"
        },

        // optional feature
        chunking: {
            enabled: true,
            partSize : 16000000
        },

        // optional feature
        resume: {
            enabled: true
        },
        retry: {
            enableAuto: false, //Enable or disable retrying uploads that receive any error or non-200 response.
            autoAttemptDelay: 60,//The number of seconds to wait between auto retry attempts.
            maxAutoAttempts: 255 //The maximum number of times to attempt to retry a failed upload.
        },

        // optional feature
        validation: {
            itemLimit: 1000,
            sizeLimit: 200000000000000
        },

        thumbnails: {
            placeholders: {
                notAvailablePath: "css/vendor/not_available-generic.png",
                waitingPath: "css/vendor/waiting-generic.png"
            }
        }
    })
        .on('upload', function (event, id, name, response) {


            console.log("on upload uploader");

            /*var $fileEl = $(this).fineUploaderS3("getItemByFileId", id);

            //if 电视剧, the video_episode only accept numbers
            if(titleCategory == "SERIAL"){
                console.log("in if serial");
                $fileEl.find("#video_episode").attr("placeholder","only number");
            }

            if(select2data !== []) {
                function format(item) { return item.tag + "  ------  " + item.id + " --- "+ item.vendor; }
                $fileEl.find("#video_master").select2({
                    data:function() {
                        console.log("load select2");
                        return { text:'tag', results: select2data };
                    },
                    formatSelection: format, //selected
                    formatResult: format //show selection
                });
            }*/


        })
        .on('submit', function(event, id, name, response){


                console.log("in submit ");

                keyRetrieval = new qq.Promise();
                var filename = $('#fineuploader-S3').fineUploader("getName", id);

                var pos = filename.lastIndexOf(".");
                var suffix = filename.substring(pos, filename.length);
                var file = "original" + suffix;
                var uuid = $('#fineuploader-S3').fineUploader("getUuid", id);

                keyRetrieval = uuid + "/" + "video" + "/" + file;


                console.log(keyRetrieval);
        })

        // Enable the "view" link in the UI that allows the file to be downloaded/viewed
        .on('complete', function(event, id, name, response) {

            console.log("in file uploader, complete");

            var uuid = $(this).fineUploader("getUuid", id);
            console.log("id:" + id + ",name:" + name, ",uuid:"+uuid);

            /*
            var $fileEl = $(this).fineUploaderS3("getItemByFileId", id),
                $viewBtn = $fileEl.find(".view-btn");

            $fileEl.find("#video_uuid").attr("value", uuid);
            $fileEl.find("#video_titleId").attr("value", titleId);

            //view is not working
            if (response.success) {
                //$viewBtn.show();
                //$viewBtn.attr("href", response.tempLink);
                console.log("in success, view link:"+response);
            }

            //movie video name allow blank
            if(titleCategory == "MOVIE" ||$fileEl.find("#video_episode").val() != "" ){
                $fileEl.find("#save_video_meta").prop("disabled", false);
            } else {
                console.log("类型： " +titleCategory);

                //check input, if null "save video" button disabled
                $fileEl.find("#video_episode").on("input propertychange", function () {
                    if(titleCategory == "SERIAL"){
                        if ($fileEl.find("#video_episode").val() == "" || isNaN($fileEl.find("#video_episode").val()) ){
                            $fileEl.find("#save_video_meta").prop("disabled", true);
                        }else{
                            $fileEl.find("#save_video_meta").prop("disabled", false);
                        }
                    }else{
                        console.log("clip: " +$fileEl.find("#video_episode").val() );
                        if ($fileEl.find("#video_episode").val() == ""){
                            $fileEl.find("#save_video_meta").prop("disabled", true);
                        }else{
                            $fileEl.find("#save_video_meta").prop("disabled", false);
                        }
                    }

                });
            }

            //save meta data
            $fileEl.find("#save_video_meta").click(function (e) {
                e.preventDefault();

                console.log("save clicked");

                var oldUrl = "/rstudio/upload/save/seriesmetadata";

                switch(titleCategory){
                    case "MOVIE":
                        $fileEl.find("#videoType").attr("value","电影");
                        break;
                    case "SHOW":
                        $fileEl.find("#videoType").attr("value","综艺");
                        var date = $fileEl.find("#video_episode").val();
                        console.log("date: "+ date);
                        break;
                    case "CLIP":
                        $fileEl.find("#videoType").attr("value","短片");
                        break;
                    //default: break;
                }

                //transfer vendor name to uppercase
                var vendors = $fileEl.find("#video_vendor").attr("value");
                console.log(vendors.toUpperCase());

                $fileEl.find("#video_vendor").attr("value",vendors.toUpperCase());

                $fileEl.find('#video_meta_form').ajaxSubmit({
                    url:oldUrl,
                    beforeSubmit: function (attr) {
                        console.log("attr: "+ JSON.stringify(attr));
                        $.each(attr, function (i, obj) {
                            if(obj.name == "vendor"){
                                obj.value = obj.value.toUpperCase();
                            }
                        })

                        console.log("attr: "+ JSON.stringify(attr));

                    },
                    success: function (response) {

                        console.log("in ajaxform succeed");

                        //fetch video from videoId
                        var video = new app.Video();
                        video.url="/rstudio/api/titles/videos/" + response;
                        video.fetch().done(function (data) {

                            //add new video to videoList
                            videosList.add(data);

                            $("#video_count").html(videosList.length);

                            //alert("save video succeed!!");
                            var alertHTML  = '<br><div class="alert alert-success" role="alert">成功保存视频！！</div><br>';
                            $(".alert-panel").html(alertHTML);

                            $fileEl.remove();

                            setTimeout(function(){
                                console.log("set timeout");
                                $(".alert-panel").remove();
                            }, 3000);

                        });

                    },
                    error: function () {
                        console.log("in error");
                    }
                });

            });*/

        });

}
