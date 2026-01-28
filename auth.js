async function analyze(type) {
  const file = document.getElementById("file").files[0];
  const data = new FormData();
  data.append("file", file);

  // استخدم الرابط الصحيح للـ Backend
  const res = await fetch("https://ai-webs.netlify.app/analyze", {  // قم بتحديث هذا الرابط إلى رابط الـ Backend
    method: "POST",
    body: data  // استخدم البيانات التي تم إضافتها إلى FormData
  });

  // التأكد من استلام الرد من الـ API
  const responseData = await res.json();
  console.log(responseData);  // عرض البيانات التي استلمتها من الـ Backend
}