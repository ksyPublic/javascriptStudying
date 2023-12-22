;(function (window) {
  const TrackingLibrary = {
    startTracking: function () {
      document.addEventListener('click', function (event) {
        const clickedElement = {
          tagName: event.target.tagName,
          text: event.target.innerText,
          time: new Date().toISOString(),
        }

        // 서버로 클릭 정보 전송
        TrackingLibrary.sendToServer(clickedElement)
      })
    },
    sendToServer: function (data) {
      // 여기서 서버로 데이터를 전송하는 로직을 추가하세요
      console.log('Sending data to server:', data)
    },
  }

  window.TrackingLibrary = TrackingLibrary
})(window)
