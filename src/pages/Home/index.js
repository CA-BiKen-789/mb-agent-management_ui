import classNames from 'classnames/bind';
import styles from './Home.module.css';
import Header from '~/components/Header';
import Banner from '~/components/Banner';
import Title from '~/components/Title';
import Intro from '~/components/Intro';
import Dropdown from '~/components/Dropdown';
import Thumbnail from '~/components/Thumbnail';

const cx = classNames.bind(styles);

function Home() {
	return (
		<div className={cx('wrapper')}>
			<Header />
			<Banner />
			<Title>Trang chính thức của 789bet</Title>
			<div className={cx('content')}>
				<img className={cx('video')} src='/images/video.png' alt='Video' />
				<div className={cx('intro')}>
					<Intro
						urlImage={'/images/title-intro.png'}
						title={'Giới thiệu'}
					>
						<div>
							<span>789BET là nhà cái có giấy phép cá cược trực tuyến hợp pháp được cấp thông qua Khu kinh tế Isle of Man & Cagayan Economic Zone and Free Port.</span>

							<span>789BET là một tổ chức xuyên quốc gia với quy mô lớn và nổi tiếng khắp Châu Á - Thái Bình Dương.</span>

							<span>789BET thuộc về tập đoàn M.A.N Entertainment Group, trụ sở chính đặt tại thủ đô Manila của "Philippines" và được coi là tập đoàn lớn nhất trên thị trường cờ bạc trực tuyến châu Á, với đội ngũ nhân viên đông đảo.</span>
						</div>
					</Intro>
					<Intro
						urlImage={'/images/title-goal.png'}
						title={'Mục tiêu'}
					>
						<div>
							<span>Mục tiêu của "789BET Online Entertainment" là đảm bảo sự công bằng giữa Khách Hàng và Công Ty, đồng thời thể hiện đầy đủ các phẩm chất và năng lực khách quan của "789BET Online Entertainment".</span>

							<span>789BET Online Entertainment là trang web trò chơi quy mô lớn đáng tin cậy và phổ biến nhất ở thị trường Châu Á, được chứng nhận bởi Hiệp hội Cá cược Trực tuyến Quốc tế và là một trong những nhà cái có đa dạng sản phẩm trò chơi trực tuyến được chứng nhận và cấp phép đầy đủ.</span>
						</div>
					</Intro>
					<Intro
						urlImage={'/images/title-safe.png'}
						title={'Mục tiêu'}
					>
						<div>
							<span>Khi đến với 789BET, quý khách hãy yên tâm về những lo ngại an ninh mạng bởi chúng tôi đã thành lập một trung tâm bảo mật mạng, đảm bảo tuyệt đối an ninh mạng của quý khách.</span>

							<span>Hơn nữa, 789BET đã được GEO TRUST công nhận và cấp chứng chỉ website an toàn nhất, toàn bộ thông tin của các thành viên đều được mã hóa để đảm bảo sự riêng tư tuyệt đối của người chơi với sự tin cậy cao đã được kiểm chứng.</span>
						</div>
					</Intro>
				</div>
				<div className={cx('dropdown')}>
					<Dropdown
						urlImage='/images/agent-program.png'
						title="Chương trình Đại lý"
					>
						<span>
							<span className={cx('title')}>Chương trình Đại Lý của 789BET là gì?</span>
							Là Quý khách trở thành đối tác của 789BET bằng cách giới thiệu, thu hút thành viên đăng kí
							tài khoản và chơi trên 789BET dưới mã Đại Lý của Quý khách. Quý
							khách sẽ được nhận tiền hoa hồng dựa trên tổng tiền thua cược
							hàng tháng của các thành viên dưới mã Đại Lý của Quý khách

							<span className={cx('title')}>
								Cách đăng kí trở thành Đại Lý của 789BET ? Tôi có cần vốn hay lệ phí
								không? gì?
							</span>
							Trở thành Đại Lý của 789BET là hoàn toàn miễn phí.
							Quý khách chỉ cần vào phần Đăng kí Điền đầy đủ và chính xác
							các thông tin theo yêu cầu. Sau đấy liên hệ qua kênh telegram
							để được tư vấn và hỗ trợ chi tiết và kích hoạt tài khoản.
							<span className={cx('title')}>Nếu không có trang web riêng, tôi có thể tham gia không? gì?</span>
							789BET khuyến khích Đại Lý nên có website riêng để phục vụ
							công việc tìm kiếm thành viên tuyến dưới một cách hiệu quả.
							Tuy nhiên Quý khách vẫn hoàn toàn có thể trở thành Đại Lý
							của 789BET mà không cần có website riêng. 789BET không giới hạn
							cách thức tìm kiếm thành viên của Đại Lý. Đại Lý hoạt động càng hiệu
							quả thì tiền hoa hồng nhận về càng cao.
							<span className={cx('title')}>Tại sao đơn đăng kí Đại Lý của tôi bị từ chối? gì?</span>

							Sau khi Quý khách đăng kí xong, trong vòng 24h ngày,
							bạn cần liên hệ tới chuyên viên đại lý để được hỗ trợ kích hoạt. Đơn đăng
							kí của Quý khách bị từ chối có thể là do Quý khách đăng kí sai họ tên,
							sai email, sai số điện thoại hoặc không liên hệ.
						</span>
					</Dropdown>
					<Dropdown
						urlImage='/images/account-info.png'
						title="Thông tin tài khoản"
					>
						<span>
							<span className={cx('title')}>Tôi có thể thay đổi thông tin cá nhân (họ tên, số điện thoại, email…) không?</span>
							Quý khách không thể thay đổi thông tin cá nhân. Nên Quý khách lưu ý đăng kí đầy đủ và đúng thông tin ngay từ đầu. Nếu đăng kí sai, Quý khách có thể yêu cầu 789BET hủy đơn đăng kí đó và đăng kí lại 1 tài khoản Đại Lý mới.
							<span className={cx('title')}>Tôi phải làm sao nếu quên mật khẩu??</span>
							Quý khách có thể liện tới chuyên viên hỗ trợ đại lý cung cấp 1 số thông tin liên quan để xác minh và mật khẩu sẽ được cung cấp về email của đại lý của bạn.
							<span className={cx('title')}>Các thông tin của Đại Lý có được bảo mật không?</span>
							Tại 789BET, toàn bộ thông tin của cả thành viên lẫn Đại Lý hoàn toàn được bảo mật và mã hóa một cách tuyệt đối. Chúng tôi luôn đặt sự an toàn của khách hàng lên hàng đầu.
							<span className={cx('title')}>Chính sách bảo mật</span>
							Chúng tôi cam kết việc bảo mật thông tin của Quý khách lên hàng đầu. Chúng tôi bảo mật các dữ liệu cá nhân của Quý khách và không tiết lộ thông tin này cho bất kỳ bên thứ ba nào, ngoại trừ theo yêu cầu của cơ quan luật pháp hoặc cần cung cấp thông tin hỗ trợ dịch vụ thanh toán để hoàn thành các giao dịch cần thiết thông qua trang web của chúng tôi. Tất cả thông tin cá nhân của Quý khách cung cấp được truyền qua Secure Socket (SSL 128 bit mã hóa tiêu chuẩn) và được lưu trữ với chế độ bảo mật tối cao. Tất cả các dữ liệu truy cập trong nội bộ sẽ bị hạn chế và giám sát chặt chẽ.
						</span>
					</Dropdown>
					<Dropdown
						urlImage='/images/income.png'
						title="Thông tin tài khoản"
					>
						<span>
							<span className={cx('title')}>Tôi nhận tiền hoa hồng bằng cách nào?</span>
							Tiền hoa hồng hàng tháng của Đại Lý sẽ được hệ thống tự động chuyển vào tài khoản ngân hàng do Đại Lý đăng kí trong khoảng từ ngày 3 đến ngày 5 của tháng kế tiếp.
							<span className={cx('title')}>Mức hoa hồng tối thiểu là bao nhiêu?</span>
							Mức hoa hồng tối thiểu để 789BET thanh toán là VND 1,000,000 .Trường hợp tiền hoa hồng của Quý khách dưới VND 1,000,000 số tiền này sẽ không được bảo lưu và cộng dồn vào tiền hoa hồng tháng kế tiếp.
							<span className={cx('title')}>Tại sao có doanh thu dương ?</span>
							Là khi thành viên tuyến dưới của Quý khách chơi thắng. Nghĩa là công ty không có lợi nhuận và Quý khách sẽ bị dương tiền hoa hồng. Lợi nhuân dương cũng sẽ được trừ vào tiền hoa hồng của tháng kế tiếp.
							<span className={cx('title')}>Hoa hồng được tính như thế nào?</span>
							Tiền Hoa hồng = ((Tổng tiền thắng thua - hoàn trả - khuyến mãi - các hoạt động sự kiện) - (Tổng tiền thắng thua x 10% phí quản lý)) x % hoa hồng lợi nhuận ở bảng trên.
							<span className={cx('title')}>Tôi cần bao nhiêu thành viên để bắt đầu được nhận hoa hồng?</span>
							Đại Lý cần có tối thiểu 05 (năm) thành viên hoạt động mỗi tháng để có thể bắt đầu được nhận hoa hồng. Thành viên hoạt động được tính là thành viên có ít nhất 01 (một) vé cược trong tháng
							<span className={cx('title')}>Làm thế nào để biết khách hàng đó do mình giới thiệu?</span>
							Sau khi đăng kí tài khoản Đại Lý thành công, Quý khách sẽ có link riêng và mã Đại Lý. Những thành viên đăng kí dưới mã Đại Lý của Quý khách sẽ được tính là thành viên tuyến dưới của Quý khách.
							<span className={cx('title')}>Lấy link riêng và mã Đại Lý như thế nào?</span>
							Đại lý vui lòng đăng nhập vào tài khoản hậu đài của mình, lướt xuống dưới cùng của trang hậu đài, tại đây Quý đại lý sẽ thấy link Đại Lý của mình dành cho cả phiên bản trên máy tính và trên điện thoại.
						</span>
					</Dropdown>
				</div>
				<div className={cx('invite')}>
					<Title>Thư mời hợp tác đại lý 789bet</Title>
					<span className={cx('invite-content')}>
						<span>Kính gửi: Toàn thể Quý Đại Lý</span>
						<span>Đầu tiên, 789BET xin gửi lời cảm ơn chân thành tới những khách hàng đã dành sự tín nhiệm và ủng hộ với dịch vụ của 789BET trong thời gian qua.</span>
						<span>Chào đón mùa xuân mới - khởi đầu mới 2023 và để kỷ niệm sự kiện Luis Suárez trở thành Đại Sứ Độc Quyền chính thức tại 789BET. 789BET trân trọng kính mời Quý Đại Lý hợp tác tham gia vào hệ thống kinh doanh cùng phát triển với chế độ ưu đãi Hoa Hồng Siêu Khủng lên tới 60% bắt đầu từ 01/01/2023.</span>
						<span>Dù Bạn là Ai đều được chào đón trở thành đối tác của Chúng Tôi, với phương châm cùng hợp tác phát triển bền vững, Chúng Tôi cam kết hợp tác lâu dài và hỗ trợ tối đa tới các Đại Lý trong suốt quá trình hoạt động.</span>
					</span>
				</div>
				<div className={cx('discount')}>
					<h1>a. Hoa hồng đại lý</h1>
					<h2>1. Đại lý mới</h2>
					<span>
						03 tháng đầu tiên tỷ lệ hoa hồng khởi điểm 55%
					</span>
					<img src='/images/discount_1.png' alt='Bảng 1' />
					<span>- Tiền thưởng cược hợp lệ 03 tháng đầu tiên</span>
					<img src='/images/discount_2.png' alt='Bảng 2' />
					<h2>2. Đại lý cũ</h2>
					<img src='/images/discount_3.png' alt='Bảng 3' />
					<h2>3. đại lý Không đạt chỉ tiêu</h2>
					<img src='/images/discount_4.png' alt='Bảng 4' />
					<span>
						- Đại Lý trong tháng không đủ chỉ tiêu thành viên mới nếu có 5 thành viên hợp lệ (bao gồm cả cũ và mới ) sẽ nhận được 30% hoa hồng.
					</span>
					<h1>B. HOA HỒNG VÀ TIỀN THƯỞNG</h1>
					<span>- Công thức tính Hoa Hồng: (Tổng Tiền thắng thua - Hoàn trả - Khuyến mãi - Các hoạt động sự kiện ) - ( Tổng tiền thắng thua x10% phí quản lý) x % lợi nhuận. </span>
					<span>- Hoa Hồng sẽ được phát trước ngày 05 hàng tháng. </span>
					<span>- Toàn bộ Tiền Hoa Hồng sẽ được phát trực tiếp vào ngân hàng mới nhất do Đại Lý cung cấp.</span>
					<h1>C. Định nghĩa</h1>
					<span>- Thành viên mới hợp lệ trong tháng: có tích luỹ 3 lần nạp trở lên, tổng nạp trên 2 triệu, đồng thời cược hợp lệ trên 5 triệu</span>
					<span> - Thành viên hợp lệ trong tháng: Thành viên cũ và mới có tích luỹ 3 lần nạp trở lên, tổng nạp trên 2 triệu, đồng thời cược hợp lệ trên 5 triệu.</span>
					<span>- Lợi Nhuận Âm: (Tổng Tiền thắng thua - Hoàn trả - Khuyến mãi - Các hoạt động sự kiện).</span>
					<span> - Lợi Nhuận Dương: Tổng Tiền thắng thua + Hoàn trả + Khuyến mãi + Các hoạt động sự kiện ). Nếu Đại Lý có lợi nhuận dương thì sẽ trừ vào lợi nhuận các tháng sau cho tới khi hết lợi nhuận dương.</span>
					<span>- Chương trình này không áp dụng cho sản phẩm xổ số. Thành viên lạm dụng, gian lận hoặc nhiều tài khoản không được tính là hợp lệ.</span>
					<span>* Yêu cầu đối với Đại Lý:</span>
					<span>- Có lịch sử đăng nhập ít nhất 5 ngày.</span>
					<span>- Tài khoản game của đại lý không nằm dưới link đại lý của chính mình.</span>
					<span>- Đại lý không hoạt động trong vòng 2 tháng kể từ thời điểm đăng ký, 789BET có quyền chấm dứt hợp tác với tài khoản đại lý đó. Nếu muốn tiếp tục tham gia và hợp tác, yêu cầu tạo tài khoản đăng ký đại lý mới.</span>
					<span>- 789BET có quyền chấm dứt chương trình này nếu trong quá trình hợp tác Đại Lý vi phạm quy định hay gian lận làm ảnh hưởng đến tính công bằng cho những Đại Lý chân chính khác. </span>
					<span>- Nghiêm cấm các Đại Lý thực hiện chạy quảng cáo GOOGLE và SEO từ khóa chính 789BET, nếu hệ thống phát hiện sẽ cắt giảm từ 10% tới 50% tổng hoa hồng của tháng đó.</span>
					<h1>D. Thư ngõ</h1>
					<span>- Chương trình Đại Lý 789BET là một hệ thống thúc đẩy thị trường chuyên nghiệp được sử dụng rộng rãi bởi cá nhân cũng như công ty, với mục đích quảng bá công ty cá cược hàng đầu đến với khách hàng.</span>
					<span>- Chúng Tôi trân trọng gửi đến Quý Đại Lý thư ngỏ này với mong muốn Quý khách hàng có thêm sự lựa chọn và Chúng Tôi có thêm khách hàng thân thiết mới. 789BET tin tưởng vào sự thành công tốt đẹp trong quá trình hợp tác giữa Công ty và Quý đối tác. Mọi hình thức hợp tác, vui lòng liên hệ trực tiếp với Chúng Tôi qua telegram: @Cskh789bet.</span>
				</div>
				<Title>Lợi ích hợp tác </Title>
				<div className={cx('thumbnail')}>
					<Thumbnail>
						<img src="/images/versatile.png" alt="Đa Năng" />
						<h1>
							Đa Năng
						</h1>
						<span>
							Không phải chịu bất kỳ chi phí nào khi đăng ký, không giới hạn thu nhập, kiếm tiền mọi lúc mọi nơi.
						</span>
					</Thumbnail>
					<Thumbnail>
						<img src="/images/stable.png" alt="Đa Năng" />
						<h1>
							ổn định
						</h1>
						<span>
							Không phải chịu bất kỳ chi phí nào khi đăng ký, không giới hạn thu nhập, kiếm tiền mọi lúc mọi nơi.
						</span>
					</Thumbnail>
					<Thumbnail>
						<img src="/images/support.png" alt="Đa Năng" />
						<h1>
							Hỗ trợ
						</h1>
						<span>
							Không phải chịu bất kỳ chi phí nào khi đăng ký, không giới hạn thu nhập, kiếm tiền mọi lúc mọi nơi.
						</span>
					</Thumbnail>
					<Thumbnail>
						<img src="/images/sp_speed.png" alt="Đa Năng" />
						<h1>
							Siêu tốc
						</h1>
						<span>
							Không phải chịu bất kỳ chi phí nào khi đăng ký, không giới hạn thu nhập, kiếm tiền mọi lúc mọi nơi.
						</span>
					</Thumbnail>
				</div>
				<Title>Làm sao để thu nhập tiền tỉ </Title>
				<div className={cx('dropdown')}>
					<Dropdown
						urlImage='/images/register_account.png'
						title="Đăng ký tài khoản"
					>
						<span>
							Click vào mục "Đăng Ký" và điền chính xác những thông tin bắt buộc. Sau đó bạn cần liên hệ đến Telegram: Đại lý 789bet hoặc bộ phận CSKH 24/7 789BET để được hỗ trợ hoàn thành thủ tục đăng ký.
						</span>
					</Dropdown>
					<Dropdown
						urlImage='/images/approval.png'
						title="Liên hệ chuyên viên xét duyệt"
					>
						<span>
							Đơn đăng ký hợp tác sau khi tạo thành công cần liên hệ đến NEW88 để được xét duyệt, sau khi đạt thỏa thuận về chính sách hợp tác chuyên viên hỗ trợ sẽ kích hoạt tài khoản đại lý và link liên kết cho bạn.
						</span>
					</Dropdown>
					<Dropdown
						urlImage='/images/discount.png'
						title="Nhận hoa hồng hằng tháng"
					>
						<span>
							Dữ liệu tính toán sẽ được thống kê từ 00:00 giờ ngày đầu tiên của tháng đến 23:59:59 (GMT+8) ngày cuối cùng của tháng. Thời gian thanh toán từ ngày 3 đến ngày 5 đầu tháng kế tiếp kèm theo báo cáo đại lý. Hoa hồng lên đến 60% sẽ được chuyển khoản trực tiếp vào tài khoản ngân hàng đại lý cung cấp trước đó.
						</span>
					</Dropdown>
				</div>
				<Title>Thông tin liên hệ</Title>
				<span className={cx('contact-info')}>Nếu bạn gặp bất cứ vấn đề gì khi đăng ký thành viên, tham gia trò chơi hoặc cần giải đáp bất kỳ thông tin nào trên website của 789BET. Hãy liên hệ trực tiếp với dịch vụ Chăm sóc khách hàng trực tuyến 24/7 của chúng tôi. Chúng tôi sẽ ngay lập tức giải quyết vấn đề giúp bạn.</span>
				<div className={cx('contact')}>
					<img src='/images/customer_care.png' alt='Chăm sóc khách hàng' />
					<img src='/images/phone.png' alt='Điện thoại' />
					<img src='/images/email.png' alt='Email' />
				</div>
			</div>
		</div >
	);
}

export default Home;