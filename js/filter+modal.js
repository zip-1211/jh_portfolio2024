
    function openModal(imageSource, videoSource) {
        // 모달 열기 전에 효과를 적용하지 않도록 클래스 추가
        document.body.classList.add('modal-open');

        // 모달의 내용을 동적으로 생성
        const modalContent = document.querySelector('.modal-content');
        modalContent.innerHTML = '';

        // 이미지 추가
        const img = document.createElement('img');
        img.src = imageSource;
        img.alt = 'Modal Image';
        modalContent.appendChild(img);        

        // 모달 열기
        modal.style.display = "flex";

        // 모달이 닫힐 때 클래스 제거 (선택사항)
        // closeModal 함수 등을 사용하여 모달이 닫힐 때 클래스를 제거
    }

/* ------------------------------------------------------------------------- */
/* 동영상 모달 창 ㅣ 테스트 중 */

/* ------------------------------------------------------------------------- */

        // 필터링 함수
        function filterImages(category) {
            const images = document.querySelectorAll('.work-img');
            images.forEach(image => {
                if (category === 'all' || category === image.getAttribute('data-category')) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        }
    
        // 필터 버튼 클릭 시 필터링 함수 호출
        const filterButtons = document.querySelectorAll('.filter-button');
        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                const category = this.getAttribute('data-filter');
                filterImages(category);
            });
        });
    
        // 모달 관련 JavaScript 코드
        function openModal(imageSrc, caption3, caption2, caption, title, video) {
            var modal = document.getElementById("myModal");
            var modalImage = document.getElementById("modalImage");
            var modalCaption = document.getElementById("modalCaption");
            var modalCaption2 = document.getElementById("modalCaption2");
            var modalCaption3 = document.getElementById("modalCaption3");
            // var videoContent = document.getElementById("video-content");
            var modalTitle = document.getElementById("modalTitle");
            
            modalImage.src = imageSrc;
            modalCaption.innerText = caption;
            modalCaption2.innerText = caption2;
            modalCaption3.innerText = caption3;
            modalTitle.innerText = title;
    
            modal.style.display = "flex";
        }
    
        function closeModal() {
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
        }
    
        // 모달 외부 클릭 시 닫기
        window.onclick = function (event) {
            var modal = document.getElementById("myModal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }


