

// 모드팩 설명
const description = "마인크래프트 1.21.6 행복한 날다람쥐 모드팩입니다. 바닐라의 느낌을 유지하면서 몰입감과 마인크래프트 어드벤쳐의 경험을 확대하기 위한 모드들로 구성되어 있습니다.";

document.querySelector("#about p").innerHTML = description;

// 모드팩 압축파일 url
const modpackDlUrl = "https://app.filen.io/#/d/5fb4227a-2329-4770-b682-1076a94efe6a%23N6F3HhvNkVCBBdHoqOtUzOc8nQYa1rny";
document.querySelector("a#modpack-dl").href = modpackDlUrl

// 설치기 url
const installerUrl = "https://github.com/Junyoung1201/saehyeon-mc-env/releases/latest";
document.querySelector("a#installer-dl").href = installerUrl;

// 설치 방법 동영상 url
const installVideoUrl = "";
document.querySelector("iframe#install-video").src = installVideoUrl;

const mods = {
    "Balm": "선행모드",
    "Cloth Config": "선행모드",
    "Collective": "선행모드",
    "Configured": "선행모드",
    "CraterLib": "선행모드",
    "GeckoLib": "선행모드",
    "Konkrete": "선행모드",
    "Melody": "선행모드",
    "midnightLib": "선행모드",
    "Hide Experimental Warning": "실험용 기능에 대한 경고 화면 삭제",
    "Immediately Fast": "최적화",
    "Move Boats": "보트를 보고 웅크리기 + 우클릭 시 옮기기 가능",
    "No Report Button": "채팅 신고 버튼 삭제",
    "No Telemetry": "마이크로소프트의 정보 수집 차단",
    "No Animal Tempt Delay": "딜레이 없는 동물 유혹",
    "Not Enough Animations": "플레이어 애니메이션",
    "Packet Fixer": "패킷 크기 제한으로 발생하는 오류를 방지",
    "Particular": "파티클 추가",
    "Pretty Rain": "몰입감있는 날씨 효과",
    "Realistic Bees": "작은 벌",
    "Reap": "우클릭으로 농작물 수확 및 다시 심기",
    "SimpleRPC": "디스코드 플레이 중 표시",
    "Sit": "앉기",
    "Skeleton Horse Spawn": "일정 확률로 해골 말을 타고 있는 스켈레톤 스폰",
    "Zombie Horse Spawn": "일정 확률로 좀비 말을 타고 있는 좀비 스폰",
    "Sodium": "최적화",
    "Sodium Extra": "최적화",
    "Sodium Shadowy Path Blocks": "최적화",
    "Thorny Bush Protection": "바지 방어구를 착용 시 가시덤불이 아프지 않음",
    "Village Bell Recipe": "벨 제작 조합법 추가",
    "Wavey Capes": "망토 물리효과 적용",
    "Xaeros Minimap": "미니맵",
    "No Feather Rample": "가벼운 착지 또는 버프로 인해 느리게 착지 할 경우 경작된 땅이 망가지지 않음",
    "Iris Shader": "쉐이더",
    "Item Displayed": "아이템 액자에 아이템 전시 기능",
    "Keep My Soiltilled": "호박이 자라도 경작된 땅이 망가지지 않음",
    "Korean Patch": "한글이 제대로 입력되지 않는 버그 수정",
    "More Concrete": "콘크리트로 만들 수 있는 바닐라 블럭 추가",
    "Crash Assistant": "충돌 파악 도우미",
    "BadOptimizations": "최적화",
    "Entity Culling": "최적화",
    "Entity Model Features": "리소스팩의 개체 모델 기능 추가",
    "Entity Texure Features": "리소스팩의 개체 텍스쳐 기능 추가",
    "Fancy Menu": "게임 UI 변경",
    "Fast IP Ping": "빠른 서버 상태 체크",
    "Dynamic FPS": "최적화",
    "Ceiling Torch": "횃불을 천장에 설치할 수 있음",
    "Better Spawner Control": "횃불로 스포너의 모든 면을 막을 시 스포너 비활성화",
    "Boat View": "보트에서 손에 들고 있는 아이템 보기",
    "Camera": "카메라 아이템 및 촬영한 이미지 전시, 아이템화",
    "Chunks Fadein": "청크 로딩에 페이드 인 효과 적용",
    "Clean Swing": "잔디와 겹쳐있는 몹을 공격 시 잔디를 통과하여 몹을 공격",
    "Crops Love Rain": "농작물들이 비를 맞으면 성장 속도가 빨라짐",
    "Easy Elytra Take Off": "겉날개 사용 시 스페이스바 두 번 연속 입력 없이 폭죽으로 바로 날기 가능",
    "Enchanted Vertical Slabs": "세로 반블럭",
}

const modListEl = document.querySelector('#mod-list');

for (let [name, desc] of Object.entries(mods)) {
    const li = document.createElement('li');
    li.textContent = `${name} (${desc})`;
    modListEl.appendChild(li);
}