$('#navbar__menu').click(sidebarOpen)
modifyProductCards();
slider('.dogs-gallery')

$('#modal-ben').click(()=> openModal('plan'));
$('#modal-map').click(()=> openModal('zone'));

$('#close-plan').click(()=> closeModal('plan'));
$('#close-zone').click(()=> closeModal('zone'));